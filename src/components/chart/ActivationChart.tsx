import FusionCharts from "fusioncharts";
import { useEffect } from "react";

const ActivationChart = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    FusionCharts.ready(() => {
      FusionCharts.options.license({
        key: process.env.FUSIONCHART_LICENSE,
        creditLabel: false,
      });
    });
  }, []);

  return <div>{children}</div>;
};

export default ActivationChart;
