export const generateDefaultStyleChart = (numVDivLines = 12) => {
  return {
    usePlotGradientColor: "0",
    showAlternateHGridColor: "0",
    bgColor: "#FFFFFF",
    canvasBgColor: "#FFFFFF",
    showCanvasBg: "1",
    showBorder: "0",
    showCanvasBorder: "0",
    canvasBorderThickness: "0",
    plotBorderThickness: "0", // Remove the border around the plot data

    // Horizontal grid lines
    divLineDashed: "1",
    divLineDashLen: "2",
    divLineDashGap: "2",
    divLineColor: "#BBBBBB",

    // Vertical grid lines
    vDivLineDashed: "1",
    vDivLineDashLen: "2",
    vDivLineDashGap: "2",
    vDivLineColor: "#BBBBBB",
    numVDivLines: numVDivLines.toString(),

    // Axis line
    yAxisLineDashed: "1",
    yAxisLineDashLen: "2",
    yAxisLineDashGap: "2",
    yAxisLineColor: "#EEEEEE",
    xAxisLineColor: "#000000",
    showxaxisline: "1",
    showyaxisline: "1",

    // Legend
    showLegend: "1",
    legendPosition: "bottom",
    legendCaption: "",
    legendItemFontSize: "12",
    legendItemFontColor: "#333333",
    legendBorderAlpha: "0", // Remove border around the legend
    legendShadow: "0",
    legendIconScale: "1.5",
    legendPadding: "10",
    legendCaptionAlignment: "center",
    legendIconBorderThickness: "0",
    legendIconSides: "4", // Make the legend icons square (box shape)

    transposeAxis: "1",
  };
};

export const generateDataChart = (): Array<{
  label: string;
  value: string;
}> => {
  return [
    { label: "Jan 2024", value: "16" },
    { label: "Feb 2024", value: "62" },
    { label: "Mar 2024", value: "125" },
    { label: "Apr 2024", value: "162" },
    { label: "May 2024", value: "240" },
    { label: "Jun 2024", value: "226" },
    { label: "Jul 2024", value: "76" },
    { label: "Aug 2024", value: "370" },
    { label: "Sep 2024", value: "88" },
    { label: "Oct 2024", value: "16" },
    { label: "Nov 2024", value: "278" },
    { label: "Dec 2024", value: "63" },
  ];
};

export const generateCategoriesChart = () => {
  return [
    { label: "Jan 2024" },
    { label: "Feb 2024" },
    { label: "Mar 2024" },
    { label: "Apr 2024" },
    { label: "May 2024" },
    { label: "Jun 2024" },
    { label: "Jul 2024" },
    { label: "Aug 2024" },
    { label: "Sep 2024" },
    { label: "Oct 2024" },
    { label: "Nov 2024" },
    { label: "Des 2024" },
  ];
};

export const generateDatasetCombinationChart = () => {
  return [
    {
      seriesname: "Issues",
      color: "#63CFE5",
      data: [
        { value: "25" },
        { value: "35" },
        { value: "57" },
        { value: "63" },
        { value: "98" },
        { value: "12" },
        { value: "29" },
        { value: "76" },
        { value: "42" },
        { value: "75" },
        { value: "92" },
        { value: "68" },
      ],
    },
    {
      seriesname: "Net Consumption",
      renderas: "line",
      color: "#073B4C",
      data: [
        { value: "57" },
        { value: "63" },
        { value: "98" },
        { value: "12" },
        { value: "25" },
        { value: "35" },
        { value: "75" },
        { value: "92" },
        { value: "68" },
        { value: "29" },
        { value: "76" },
        { value: "42" },
      ],
    },
  ];
};

export const generateDatasetStackedColumnChart = () => {
  return [
    {
      seriesname: "Issues",
      color: "#8979FF",
      data: [
        { value: "25" },
        { value: "35" },
        { value: "57" },
        { value: "63" },
        { value: "98" },
        { value: "12" },
        { value: "29" },
        { value: "76" },
        { value: "42" },
        { value: "75" },
        { value: "92" },
        { value: "68" },
      ],
    },
    {
      seriesname: "Discard",
      color: "#FF928A",
      data: [
        { value: "57" },
        { value: "63" },
        { value: "98" },
        { value: "12" },
        { value: "25" },
        { value: "35" },
        { value: "75" },
        { value: "92" },
        { value: "68" },
        { value: "29" },
        { value: "76" },
        { value: "42" },
      ],
    },
    {
      seriesname: "Positive Adjustment",
      color: "#3CC3DF",
      data: [
        { value: "98" },
        { value: "12" },
        { value: "57" },
        { value: "63" },
        { value: "68" },
        { value: "29" },
        { value: "76" },
        { value: "42" },
        { value: "25" },
        { value: "35" },
        { value: "75" },
        { value: "92" },
      ],
    },
    {
      seriesname: "Negative Adjustment",
      color: "#FFAE4C",
      data: [
        { value: "63" },
        { value: "68" },
        { value: "98" },
        { value: "12" },
        { value: "57" },
        { value: "29" },
        { value: "76" },
        { value: "25" },
        { value: "35" },
        { value: "75" },
        { value: "92" },
        { value: "42" },
      ],
    },
  ];
};

export const generateDataPieChart = (): Array<{
  label: string;
  value: string;
  color: string;
}> => {
  return [
    { label: "Issue", value: "70", color: "#8979FF" },
    { label: "Discard", value: "9", color: "#FF928A" },
    { label: "Positive Adjustment", value: "8", color: "#3CC3DF" },
    { label: "Negative Adjustment", value: "12", color: "#FFAE4C" },
  ];
};
