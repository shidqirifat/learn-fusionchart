import { generateDefaultStyleChart } from "@/utils/chat";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFusioncharts.fcRoot(FusionCharts, Chart, FusionTheme);

type ChartProps = {
  chartStyle?: Record<string, string>;
  data: Array<{ label: string; value: string }>;
};

export default function Line({ chartStyle, data }: ChartProps) {
  const dataSource = {
    chart: {
      ...generateDefaultStyleChart(data.length - 2),
      anchorRadius: "5",
      lineThickness: "1",
      showValues: "1",
      theme: "fusion",
      ...chartStyle,
    },
    data,
  };

  return (
    <ReactFusioncharts
      type="line"
      width="100%"
      height="300"
      dataFormat="JSON"
      dataSource={dataSource}
    />
  );
}
