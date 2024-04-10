import React from "react";
// import { useRecoilValue } from "recoil";
import PropTypes from "prop-types";
import { ChartWidgetComponent } from "../../../../widgetComponent";

export const ChartWidget = ({
  title,
  table,
  renderAs: renderer,
  yAxis,
  series,
  type,
  config,
  isLoading,
  isError,
  onEvents,
  handleRefresh,
  hasTopLabels,
  rotateYAxisLabel,
  isHeader,
  chartMinHeight,
  isPieLabelVisible,
  color,
  dataoptions,
  displayCount,
  displayCountHorizontal,
  onSelectDrop,
  pieDLegends,
  radiusLevel,
  formatter,
  monoColors,
  isLegendsDisplay,
  dataPointColorChange,
  stackBarTotalCount,
  tableValue,
  headerLabel,
  infoContent,
  WidgetInfoIcon,
}) => {
  return (
    <ChartWidgetComponent
      title={title}
      table={table}
      renderAs={renderer}
      yAxis={yAxis}
      series={series}
      type={type}
      config={config}
      isLoading={isLoading}
      isError={isError}
      onEvents={onEvents}
      handleRefresh={handleRefresh}
      hasTopLabels={hasTopLabels}
      rotateYAxisLabel={rotateYAxisLabel}
      //   userEditAccess={edit?.userEdit}
      isHeader={isHeader}
      chartMinHeight={chartMinHeight}
      isPieLabelVisible={isPieLabelVisible}
      color={color}
      monoColors={monoColors}
      //   filterValues={onFilterValueGlobal()}
      dataoptions={dataoptions}
      onSelectDrop={onSelectDrop}
      displayCount={displayCount}
      displayCountHorizontal={displayCountHorizontal}
      pieDLegends={pieDLegends}
      radiusLevel={radiusLevel}
      formatter={formatter}
      isLegendsDisplay={isLegendsDisplay}
      isMonoEnable
      dataPointColorChange={dataPointColorChange}
      stackBarTotalCount={stackBarTotalCount}
      tableValue={tableValue}
      headerLabel={headerLabel}
      infoContent={infoContent}
      WidgetInfoIcon={WidgetInfoIcon}
    />
  );
};

export default ChartWidget;

ChartWidget.propTypes = {
  title: PropTypes.string,
  renderAs: PropTypes.oneOf(["svg", "canvas"]),
  //   type: PropTypes.oneOf(chartTypes),
  series: PropTypes.objectOf(PropTypes.any),
  table: PropTypes.bool,
  yAxis: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  config: PropTypes.objectOf(PropTypes.any),
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  onEvents: PropTypes.func,
  handleRefresh: PropTypes.func,
  hasTopLabels: PropTypes.bool,
  rotateYAxisLabel: PropTypes.number,
  isHeader: PropTypes.bool,
  chartMinHeight: PropTypes.number,
  isPieLabelVisible: PropTypes.bool,
  color: PropTypes.oneOfType([PropTypes.array]),
  monoColors: PropTypes.oneOfType([PropTypes.array]),
  dataoptions: PropTypes.shape(),
  onSelectDrop: PropTypes.shape(),
  displayCount: PropTypes.bool,
  displayCountHorizontal: PropTypes.bool,
  pieDLegends: PropTypes.bool,
  radiusLevel: PropTypes.any,
  formatter: PropTypes.string,
  isLegendsDisplay: PropTypes.bool,
  dataPointColorChange: PropTypes.bool,
  stackBarTotalCount: PropTypes.func,
  tableValue: PropTypes.bool,
  headerLabel: PropTypes.string,
  WidgetInfoIcon: PropTypes.bool,
  infoContent: PropTypes.bool,
};

ChartWidget.defaultProps = {
  title: "Chart Title",
  renderAs: "svg",
  type: "bar",
  isLoading: false,
  isError: false,
  hasTopLabels: false,
  table: false,
  rotateYAxisLabel: 0,
  config: {},
  yAxis: {},
  series: {},
  onEvents: null,
  handleRefresh: null,
  isHeader: true,
  chartMinHeight: undefined,
  isPieLabelVisible: true,
  color: undefined,
  monoColors: [],
  dataoptions: undefined,
  onSelectDrop: undefined,
  displayCount: false,
  displayCountHorizontal: false,
  pieDLegends: false,
  isLegendsDisplay: false,
  radiusLevel: ["40%", "70%"],
  formatter: undefined,
  dataPointColorChange: false,
  stackBarTotalCount: null,
  tableValue: false,
  headerLabel: "",
  WidgetInfoIcon: false,
  infoContent: false,
};
