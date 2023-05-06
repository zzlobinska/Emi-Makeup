import React, { useState } from 'react';
import ApexChart from 'react-apexcharts';
import { Props } from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import classNames from 'classnames';

import useIsDarkMode from 'src/components/hooks/useIsDarkMode';

import Button from '../Button';
import { IconNames } from '../Icon';
import { ApexLegend, ApexTheme } from './types';

import style from './Chart.module.scss';

type chartTypes =
  | 'line'
  | 'area'
  | 'bar'
  | 'pie'
  | 'donut'
  | 'radialBar'
  | 'scatter'
  | 'bubble'
  | 'heatmap'
  | 'candlestick'
  | 'boxPlot'
  | 'radar'
  | 'polarArea'
  | 'rangeBar'
  | 'treemap';

interface ChartProps extends Props {
  options: ApexOptions;
  type?: chartTypes;
  chartTypeOptions?: chartTypes[];
  chartClassName?: string;
  fullWidth?: boolean;
}

const Chart = (props: ChartProps) => {
  const { className, chartClassName, type, options, chartTypeOptions = [], fullWidth, ...rest } = props;
  const isDark = useIsDarkMode();

  const [chartType, setChartType] = useState<chartTypes>(type || chartTypeOptions[0] || 'line');

  const chartTheme: ApexTheme = {
    mode: isDark ? 'dark' : 'light',
    palette: 'palette1'
  };

  const chartLegend: ApexLegend = {
    show: true,
    position: 'bottom',
    horizontalAlign: 'center'
  };

  const chartOptions = {
    toolbar: {
      show: true,
      tools: {
        download: true,
        selection: false,
        zoom: false,
        zoomin: false,
        zoomout: false,
        pan: false
      }
    },
    zoom: {
      enabled: false
    },
    animations: {
      enabled: true
    },
    background: 'transparent'
  };

  const combinedOptions: ApexOptions = {
    theme: chartTheme,
    chart: chartOptions,
    legend: chartLegend,
    ...options
  };

  const chartTypeButtons = chartTypeOptions.map((option) => (
    <Button
      className={style.button}
      icon={`chart${option[0].toUpperCase() + option.slice(1)}` as IconNames}
      onClick={() => setChartType(option)}
      gray={chartType !== option}
      key={option}
    />
  ));

  const renderChart = () => {
    // Array.map function is required to proper chart render, otherwise some options may become bugged
    return chartTypeOptions.map(
      (option) =>
        option === chartType && (
          <ApexChart
            className={classNames(style.chart, chartClassName)}
            type={chartType}
            options={combinedOptions}
            series={combinedOptions.series}
            key={option}
            {...rest}
          />
        )
    );
  };

  return (
    <div className={classNames(style.container, className, { [style.fullWidth]: fullWidth })}>
      {chartTypeOptions?.length > 0 && <div className={style.chartTypeOptions}>{chartTypeButtons}</div>}
      {renderChart()}
    </div>
  );
};

export default Chart;
