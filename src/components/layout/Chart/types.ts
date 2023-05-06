export type ApexTheme = {
  mode?: 'light' | 'dark';
  palette?: string;
  monochrome?: {
    enabled?: boolean;
    color?: string;
    shadeTo?: 'light' | 'dark';
    shadeIntensity?: number;
  };
};

export type ApexLegend = {
  show?: boolean;
  showForSingleSeries?: boolean;
  showForNullSeries?: boolean;
  showForZeroSeries?: boolean;
  floating?: boolean;
  inverseOrder?: boolean;
  position?: 'top' | 'right' | 'bottom' | 'left';
  horizontalAlign?: 'left' | 'center' | 'right';
  fontSize?: string;
  fontFamily?: string;
  fontWeight?: string | number;
  width?: number;
  height?: number;
  offsetX?: number;
  offsetY?: number;
  formatter?(legendName: string, opts?: any): string;
  tooltipHoverFormatter?(legendName: string, opts?: any): string;
  textAnchor?: string;
  customLegendItems?: string[];
  labels?: {
    colors?: string | string[];
    useSeriesColors?: boolean;
  };
  markers?: {
    width?: number;
    height?: number;
    strokeColor?: string;
    strokeWidth?: number;
    fillColors?: string[];
    offsetX?: number;
    offsetY?: number;
    radius?: number;
    customHTML?(): any;
    onClick?(): void;
  };
  itemMargin?: {
    horizontal?: number;
    vertical?: number;
  };
  containerMargin?: {
    left?: number;
    top?: number;
  };
  onItemClick?: {
    toggleDataSeries?: boolean;
  };
  onItemHover?: {
    highlightDataSeries?: boolean;
  };
};

export type ApexMarkerShape = 'circle' | 'square' | 'rect' | string[];

export type ApexDiscretePoint = {
  seriesIndex?: number;
  dataPointIndex?: number;
  fillColor?: string;
  strokeColor?: string;
  size?: number;
  shape?: ApexMarkerShape;
};

export type ApexMarkers = {
  size?: number | number[];
  colors?: string | string[];
  strokeColors?: string | string[];
  strokeWidth?: number | number[];
  strokeOpacity?: number | number[];
  strokeDashArray?: number | number[];
  fillOpacity?: number | number[];
  discrete?: ApexDiscretePoint[];
  shape?: ApexMarkerShape;
  width?: number | number[];
  height?: number | number[];
  radius?: number;
  offsetX?: number;
  offsetY?: number;
  showNullDataPoints?: boolean;
  onClick?(e?: any): void;
  onDblClick?(e?: any): void;
  hover?: {
    size?: number;
    sizeOffset?: number;
  };
};
