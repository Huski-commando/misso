import { useAppSelector } from "@/customHooks/hooks";
import { ChildrenProps } from "@/lib/types";

export default function ThemeProvider({ children }: ChildrenProps) {
  const { theme } = useAppSelector((state) => state.theme);

  return (
    <div className={theme}>
      <div
        className={`bg-gray-100 text-gray-700 dark:text-gray-200 dark:bg-[rgb(16,23,42)] min-h-screen`}
      >
        {children}
      </div>
    </div>
  );
}
