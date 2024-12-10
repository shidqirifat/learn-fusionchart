import { FormatDownloadChart } from "@/types/chart";
import Download from "../icons/Download";

type ButtonExportProps = {
  onClick: (format: FormatDownloadChart) => void;
};

type ButtonProps = {
  onClick: () => void;
  children: string;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="py-2 px-3 text-slate-800 text-sm hover:bg-slate-50 transition text-left"
    >
      {children}
    </button>
  );
};

const formatsExport = [
  {
    format: FormatDownloadChart.PNG,
    label: "Export as PNG",
  },
  {
    format: FormatDownloadChart.JPG,
    label: "Export as JPG",
  },
  {
    format: FormatDownloadChart.PDF,
    label: "Export as PDF",
  },
  {
    format: FormatDownloadChart.SVG,
    label: "Export as SVG",
  },
  {
    format: FormatDownloadChart.XLSX,
    label: "Export as XLSX",
  },
];

export default function ButtonExport({ onClick }: ButtonExportProps) {
  return (
    <div className="absolute z-10 right-6 top-6 flex flex-col gap-1 group">
      <div className="flex justify-end">
        <button className="p-2 rounded-md border border-gray">
          <Download />
        </button>
      </div>

      <div className="rounded-md border border-gray overflow-hidden hidden group-hover:grid relative bg-white">
        {formatsExport.map((item) => (
          <Button key={item.format} onClick={() => onClick(item.format)}>
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
