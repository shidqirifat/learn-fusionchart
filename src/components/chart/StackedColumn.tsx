/* eslint-disable @typescript-eslint/no-explicit-any */
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
  dataset: any;
  categories: any;
};

export default function StackedColumn({
  id,
  chartStyle,
  categories,
  dataset,
}: ChartProps) {
  const dataSource = {
    chart: {
      ...generateDefaultStyleChart(categories[0].category.length - 1),
      showValues: "1",
      chartBottomMargin: "20",
      theme: "fusion",
      ...chartStyle,
    },
    categories,
    dataset,
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
        type="stackedcolumn2d"
        width="100%"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </div>
  );
}
