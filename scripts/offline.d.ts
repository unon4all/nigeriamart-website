declare module '*.png' { const value: string; export default value; }
declare module '*.css' { const value: string; export default value; }

declare namespace React {
  type ReactNode = any;
  type PointerEvent<T = any> = any;
  type CSSProperties = Record<string, string | number>;
}

declare namespace JSX {
  type Element = any;
  interface IntrinsicElements { [elemName: string]: any; }
  interface IntrinsicAttributes { key?: any; }
  interface ElementChildrenAttribute { children: {}; }
}

declare module 'react' {
  const React: any;
  export default React;
  export type ReactNode = any;
  export const StrictMode: any;
  export function useEffect(effect: any, deps?: any[]): any;
  export function useState<T = any>(initial?: T): [T, (value: any) => void];
  export function useMemo<T = any>(factory: () => T, deps: any[]): T;
  export function useRef<T = any>(initial: any): { current: T };
}

declare module 'react-dom/client' {
  const ReactDOM: any;
  export default ReactDOM;
}

declare module 'framer-motion' {
  export const motion: any;
  export const AnimatePresence: any;
  export const useReducedMotion: any;
  export const useMotionValue: any;
  export const useSpring: any;
  export const useTransform: any;
}

declare module 'lucide-react' {
  export type LucideIcon = any;
  export const ArrowDown: any;
  export const ArrowDownRight: any;
  export const ArrowRight: any;
  export const ArrowUpRight: any;
  export const BadgeCheck: any;
  export const BarChart3: any;
  export const BellRing: any;
  export const Boxes: any;
  export const Building2: any;
  export const Check: any;
  export const CheckCircle2: any;
  export const ChevronDown: any;
  export const CircleDot: any;
  export const ClipboardList: any;
  export const Eye: any;
  export const Factory: any;
  export const Forklift: any;
  export const GitCompareArrows: any;
  export const Globe2: any;
  export const Linkedin: any;
  export const MapPin: any;
  export const Mail: any;
  export const Menu: any;
  export const MessageCircle: any;
  export const MessageSquareQuote: any;
  export const MessageSquareText: any;
  export const MessagesSquare: any;
  export const PackageCheck: any;
  export const Printer: any;
  export const Search: any;
  export const Share2: any;
  export const ShieldCheck: any;
  export const Shirt: any;
  export const SlidersHorizontal: any;
  export const Sparkles: any;
  export const Sprout: any;
  export const Store: any;
  export const TrendingUp: any;
  export const Truck: any;
  export const Users: any;
  export const UsersRound: any;
  export const Waypoints: any;
  export const Wrench: any;
  export const X: any;
}


declare module 'react/jsx-runtime' { export const jsx: any; export const jsxs: any; export const Fragment: any; }
