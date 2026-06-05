import { useEffect, useState, type ReactNode } from "react";

type MobileStudyShellProps = {
  header: ReactNode;
  children: ReactNode;
  indexBar?: ReactNode;
  actionBar: ReactNode;
};

function isStandaloneDisplayMode() {
  if (typeof window === "undefined") return false;
  const navigatorWithStandalone = window.navigator as Navigator & { standalone?: boolean };
  return window.matchMedia("(display-mode: standalone)").matches || navigatorWithStandalone.standalone === true;
}

export function MobileStudyShell({ header, children, indexBar, actionBar }: MobileStudyShellProps) {
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(display-mode: standalone)");
    const update = () => setIsStandalone(isStandaloneDisplayMode());
    update();
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", update);
      return () => mediaQuery.removeEventListener("change", update);
    }
    mediaQuery.addListener(update);
    return () => mediaQuery.removeListener(update);
  }, []);

  return (
    <div className={`mobile-study-shell -mx-3 flex flex-col gap-2 overflow-x-hidden px-3 md:hidden ${isStandalone ? "mobile-study-shell-standalone" : ""}`} data-standalone={isStandalone ? "true" : "false"}>
      <header className="shrink-0">{header}</header>
      <main className="mobile-study-main no-scrollbar flex-1">{children}</main>
      {indexBar ? <div className="shrink-0">{indexBar}</div> : null}
      <div className="mobile-study-action-bar px-3">{actionBar}</div>
    </div>
  );
}
