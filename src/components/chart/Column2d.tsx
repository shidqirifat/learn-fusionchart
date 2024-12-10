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

export default function Column2d({ id, chartStyle, data }: ChartProps) {
  const dataSource = {
    chart: {
      ...generateDefaultStyleChart(data.length - 1),
      theme: "fusion",
      showValues: "1",
      ...chartStyle,
    },
    data,
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
        type="column2d"
        width="100%"
        height="390"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </div>
  );
}
