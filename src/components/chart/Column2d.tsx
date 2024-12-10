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

export default function Column2d({ chartStyle, data }: ChartProps) {
  const dataSource = {
    chart: {
      ...generateDefaultStyleChart(data.length - 1),
      theme: "fusion",
      showValues: "1",
      ...chartStyle,
    },
    data,
  };

  return (
    <ReactFusioncharts
      type="column2d"
      width="100%"
      height="300"
      dataFormat="JSON"
      dataSource={dataSource}
    />
  );
}
