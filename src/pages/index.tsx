import ChartWrapper from "@/components/chart/ChartWrapper";
import {
  generateCategoriesChart,
  generateDataChart,
  generateDataPieChart,
  generateDatasetCombinationChart,
  generateDatasetStackedColumnChart,
} from "@/utils/chat";
import dynamic from "next/dynamic.js";

const ActivationChart = dynamic(
  () => import("@/components/chart/ActivationChart"),
  {
    ssr: false,
  }
);

const Pie2d = dynamic(() => import("@/components/chart/Pie2d"), {
  ssr: false,
});

const StackedColumn = dynamic(
  () => import("@/components/chart/StackedColumn"),
  {
    ssr: false,
  }
);

const Column2dLine = dynamic(() => import("@/components/chart/Column2dLine"), {
  ssr: false,
});

const Line = dynamic(() => import("@/components/chart/Line"), {
  ssr: false,
});

const Column2d = dynamic(() => import("@/components/chart/Column2d"), {
  ssr: false,
});

export default function Home() {
  return (
    <ActivationChart>
      <div className="grid grid-cols-1 gap-8 m-4">
        <ChartWrapper>
          <Pie2d
            id="transaction-pie-chart"
            chartStyle={{
              caption: "Transaction Type",
              subcaption: "From 01-01-2024 to 03-12-2024",
            }}
            data={generateDataPieChart()}
          />
        </ChartWrapper>

        <ChartWrapper>
          <StackedColumn
            id="transaction-stacked-chart"
            chartStyle={{
              caption: "Transaction Type - Number of transactions",
              subcaption: "From 01-01-2024 to 03-12-2024",
            }}
            categories={[{ category: generateCategoriesChart() }]}
            dataset={generateDatasetStackedColumnChart()}
          />
        </ChartWrapper>

        <ChartWrapper>
          <Column2dLine
            id="issues-column-chart"
            chartStyle={{
              caption: "Direct issues excluding transfer orders (All)",
              subcaption: "From 01-01-2024 to 03-12-2024",
            }}
            categories={[{ category: generateCategoriesChart() }]}
            dataset={generateDatasetCombinationChart()}
          />
        </ChartWrapper>

        <ChartWrapper>
          <Line
            id="availability-line-chart"
            chartStyle={{
              caption: "% Availability (or In-stock %)",
              subcaption: "From 01-01-2024 to 03-12-2024",
              paletteColors: "#8979FF",
            }}
            data={generateDataChart()}
          />
        </ChartWrapper>

        <ChartWrapper>
          <Column2d
            id="average-lead-time-column-chart"
            chartStyle={{
              caption: "Average lead time (days)",
              subcaption: "From 01-01-2024 to 03-12-2024",
              paletteColors: "#FFAE4C",
            }}
            data={generateDataChart()}
          />
        </ChartWrapper>

        <ChartWrapper>
          <Column2d
            id="number-order-column-chart"
            chartStyle={{
              caption: "Number of Orders",
              subcaption: "From 01-01-2024 to 03-12-2024",
              paletteColors: "#88C6CC",
            }}
            data={generateDataChart()}
          />
        </ChartWrapper>
      </div>
    </ActivationChart>
  );
}
