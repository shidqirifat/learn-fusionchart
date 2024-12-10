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
        <ChartWrapper
          title="Transaction Type - Number of transactions"
          caption="From 01-01-2024 to 03-12-2024"
        >
          <Pie2d data={generateDataPieChart()} />
        </ChartWrapper>

        <ChartWrapper
          title="Transaction Type - Number of transactions"
          caption="From 01-01-2024 to 03-12-2024"
        >
          <StackedColumn
            categories={[{ category: generateCategoriesChart() }]}
            dataset={generateDatasetStackedColumnChart()}
          />
        </ChartWrapper>

        <ChartWrapper
          title="Direct issues excluding transfer orders (All)"
          caption="From 01-01-2024 to 03-12-2024"
        >
          <Column2dLine
            categories={[{ category: generateCategoriesChart() }]}
            dataset={generateDatasetCombinationChart()}
          />
        </ChartWrapper>

        <ChartWrapper
          title="% Availability (or In-stock %)"
          caption="From 01-01-2024 to 03-12-2024"
        >
          <Line
            chartStyle={{ paletteColors: "#8979FF" }}
            data={generateDataChart()}
          />
        </ChartWrapper>

        <ChartWrapper
          title="Average lead time (days)"
          caption="From 01-01-2024 to 03-12-2024"
        >
          <Column2d
            chartStyle={{ paletteColors: "#FFAE4C" }}
            data={generateDataChart()}
          />
        </ChartWrapper>

        <ChartWrapper
          title="Number of Orders"
          caption="From 01-01-2024 to 03-12-2024"
        >
          <Column2d
            chartStyle={{ paletteColors: "#88C6CC" }}
            data={generateDataChart()}
          />
        </ChartWrapper>
      </div>
    </ActivationChart>
  );
}
