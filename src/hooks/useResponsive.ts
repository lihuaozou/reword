import { useEffect, useState } from "react";
import { getDeviceType, getOrientation, type DeviceType, type Orientation } from "../utils/responsive";

type ResponsiveState = {
  width: number;
  height: number;
  device: DeviceType;
  orientation: Orientation;
};

function readViewport(): ResponsiveState {
  if (typeof window === "undefined") {
    return { width: 1024, height: 768, device: "desktop", orientation: "landscape" };
  }
  const width = window.innerWidth;
  const height = window.innerHeight;
  return {
    width,
    height,
    device: getDeviceType(width),
    orientation: getOrientation(width, height),
  };
}

export function useResponsive() {
  const [state, setState] = useState<ResponsiveState>(() => readViewport());

  useEffect(() => {
    const update = () => setState(readViewport());
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  return {
    ...state,
    isMobile: state.device === "mobile",
    isTablet: state.device === "tablet",
    isDesktop: state.device === "desktop",
  };
}
