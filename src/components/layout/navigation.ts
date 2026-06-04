import {
  Award,
  BarChart3,
  BookOpen,
  CalendarCheck2,
  Cloud,
  ClipboardCheck,
  LibraryBig,
  RefreshCcw,
  Settings,
  ShoppingBag,
  Swords,
  UserRound,
} from "lucide-react";
import type { RouteName } from "../../types";

export type NavItem = {
  route: RouteName;
  label: string;
  shortLabel?: string;
  icon: typeof BarChart3;
};

export const primaryNavItems: NavItem[] = [
  { route: "dashboard", label: "首页 Dashboard", shortLabel: "首页", icon: BarChart3 },
  { route: "units", label: "单元学习", shortLabel: "单元", icon: BookOpen },
  { route: "review", label: "今日复习", shortLabel: "复习", icon: RefreshCcw },
  { route: "monster", label: "单词挑战", shortLabel: "挑战", icon: Swords },
  { route: "profile", label: "我的", shortLabel: "我的", icon: UserRound },
];

export const desktopNavItems: NavItem[] = [
  primaryNavItems[0],
  primaryNavItems[1],
  { route: "total", label: "总词库", icon: LibraryBig },
  primaryNavItems[2],
  { route: "quiz", label: "测试中心", icon: ClipboardCheck },
  primaryNavItems[3],
  { route: "checkin", label: "打卡签到", icon: CalendarCheck2 },
  { route: "shop", label: "兑换商店", icon: ShoppingBag },
  { route: "statistics", label: "学习统计", icon: BarChart3 },
  { route: "achievements", label: "成就徽章", icon: Award },
  { route: "settings", label: "设置", icon: Settings },
  { route: "account", label: "账号同步", icon: Cloud },
];

export function isRouteActive(current: RouteName, route: RouteName) {
  if (current === route) return true;
  if (route === "units" && (current === "unitDetail" || current === "study" || current === "recall")) return true;
  if (route === "quiz" && current === "quiz") return true;
  return false;
}
