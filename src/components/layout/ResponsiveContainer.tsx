import type { ReactNode } from "react";
import { useResponsive } from "../../hooks/useResponsive";

type ResponsiveContainerProps = {
  children: ReactNode;
  className?: string;
};

export function ResponsiveContainer({ children, className = "" }: ResponsiveContainerProps) {
  const { isMobile, isTablet } = useResponsive();
  const base = isMobile ? "w-full px-4 pb-28 pt-4" : isTablet ? "mx-auto max-w-5xl px-6 pb-12 pt-5" : "mx-auto max-w-7xl px-8 pb-12 pt-6";

  return <main className={`${base} ${className}`.trim()}>{children}</main>;
}
