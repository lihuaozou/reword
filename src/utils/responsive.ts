export type DeviceType = "mobile" | "tablet" | "desktop";
export type Orientation = "portrait" | "landscape";

export function getDeviceType(width: number): DeviceType {
  if (width < 768) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
}

export function getOrientation(width: number, height: number): Orientation {
  return width >= height ? "landscape" : "portrait";
}
