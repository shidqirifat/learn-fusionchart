import { generateDefaultStyleChart } from "@/utils/chat";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ButtonExport from "../button/ButtonExport";
import { FormatDownloadChart } from "@/types/chart";

ReactFusioncharts.fcRoot(FusionCharts, Chart, FusionTheme);

type ChartProps = {
  id: string;
  chartStyle?: Record<string, string>;
  data: Array<{ label: string; value: string }>;
};

export default function Pie2d({ id, chartStyle, data }: ChartProps) {
  const dataSource = {
    chart: {
      ...generateDefaultStyleChart(),
      use3DLighting: "0",
      showShadow: "0",
      showPercentValues: "1",
      useDataPlotColorForLabels: "1",
      useDataPlotForLabels: "0",
      plottooltext: "Category: $label{br}Value: $dataValue</div>",
      smartLineThickness: "1",
      chartBottomMargin: "20",
      theme: "fusion",
      ...chartStyle,
    },
    data,
    legendText: "Toggle the visibility of {legendText}.",
  };

  const exportChart = (format: FormatDownloadChart) => {
    FusionCharts.batchExport({
      exportFormat: format,
      exportFileName: "export-chart",
      charts: [{ id }],
    });
  };

  return (
    <div>
      <ButtonExport onClick={exportChart} />

      <ReactFusioncharts
        id={id}
        type="pie2d"
        width="100%"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </div>
  );
}
