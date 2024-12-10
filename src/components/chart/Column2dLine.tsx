/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateDefaultStyleChart } from "@/utils/chat";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFusioncharts.fcRoot(FusionCharts, Chart, FusionTheme);

type ChartProps = {
  chartStyle?: Record<string, string>;
  dataset: any;
  categories: any;
};

export default function Column2dLine({
  chartStyle,
  categories,
  dataset,
}: ChartProps) {
  const dataSource = {
    chart: {
      ...generateDefaultStyleChart(categories[0].category.length - 1),
      anchorRadius: "5",
      lineThickness: "1",
      showValues: "1",
      chartBottomMargin: "20",
      theme: "fusion",
      ...chartStyle,
    },
    categories,
    dataset,
  };

  return (
    <ReactFusioncharts
      type="mscombi2d"
      width="100%"
      height="300"
      dataFormat="JSON"
      dataSource={dataSource}
    />
  );
}
