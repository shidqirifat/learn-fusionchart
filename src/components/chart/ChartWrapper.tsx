import { ReactNode } from "react";

type ChartWrapperProps = {
  children: ReactNode;
};

export default function ChartWrapper({ children }: ChartWrapperProps) {
  return (
    <div className="pt-6 px-4 border border-gray rounded-lg relative">
      {children}
    </div>
  );
}
