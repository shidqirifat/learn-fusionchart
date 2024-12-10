import { ReactNode } from "react";
import Download from "../icons/Download";

type ChartWrapperProps = {
  children: ReactNode;
  title: string;
  caption: string;
};

export default function ChartWrapper({
  children,
  title,
  caption,
}: ChartWrapperProps) {
  return (
    <div className="pt-6 px-4 border border-gray rounded-lg">
      <div className="text-center relative mb-4">
        <h3 className="font-bold text-sm leading-5 text-black">{title}</h3>
        <h4 className="font-normal text-xs leading-4 text-slate-600">
          {caption}
        </h4>

        <button className="p-2 rounded-md border border-gray absolute right-0 top-0">
          <Download />
        </button>
      </div>
      <div>{children}</div>
    </div>
  );
}
