/* eslint-disable @typescript-eslint/no-explicit-any */

import classNames from 'classnames';

import { ReactComponent as ArrowBadgeIcon } from 'src/assets/icons/arrow-badge-down.svg';
import { ReactComponent as ArrowRightIcon } from 'src/assets/icons/arrow-narrow-right.svg';
import { ReactComponent as DiscordIcon } from 'src/assets/icons/brand-discord.svg';
import { ReactComponent as TerminalIcon } from 'src/assets/icons/brand-tabler.svg';
import { ReactComponent as TwitterIcon } from 'src/assets/icons/brand-twitter.svg';
import { ReactComponent as StoreIcon } from 'src/assets/icons/building-store.svg';
import { ReactComponent as ChartAreaIcon } from 'src/assets/icons/chart-area.svg';
import { ReactComponent as ChartBarIcon } from 'src/assets/icons/chart-bar.svg';
import { ReactComponent as ChartBoxPlotIcon } from 'src/assets/icons/chart-box-plot.svg';
import { ReactComponent as ChartBubbleIcon } from 'src/assets/icons/chart-bubble.svg';
import { ReactComponent as ChartCandlestickIcon } from 'src/assets/icons/chart-candlestick.svg';
import { ReactComponent as ChartDonutIcon } from 'src/assets/icons/chart-donut.svg';
import { ReactComponent as ChartHeatmapIcon } from 'src/assets/icons/chart-heatmap.svg';
import { ReactComponent as ChartLineIcon } from 'src/assets/icons/chart-line.svg';
import { ReactComponent as ChartPieIcon } from 'src/assets/icons/chart-pie.svg';
import { ReactComponent as ChartPolarAreaIcon } from 'src/assets/icons/chart-polar-area.svg';
import { ReactComponent as ChartRadarIcon } from 'src/assets/icons/chart-radar.svg';
import { ReactComponent as ChartRadialBarIcon } from 'src/assets/icons/chart-radial-bar.svg';
import { ReactComponent as ChartRangeBarIcon } from 'src/assets/icons/chart-range-bar.svg';
import { ReactComponent as ChartScatterIcon } from 'src/assets/icons/chart-scatter.svg';
import { ReactComponent as ChartTreemapIcon } from 'src/assets/icons/chart-treemap.svg';
import { ReactComponent as ChartTuneIcon } from 'src/assets/icons/chart-tune.svg';
import { ReactComponent as TickIcon } from 'src/assets/icons/check.svg';
import { ReactComponent as DollarIcon } from 'src/assets/icons/currency-dollar.svg';
import { ReactComponent as EthereumIcon } from 'src/assets/icons/currency-ethereum.svg';
import { ReactComponent as FlagDEIcon } from 'src/assets/icons/de.svg';
import { ReactComponent as EyeIcon } from 'src/assets/icons/eye.svg';
import { ReactComponent as EyeOffIcon } from 'src/assets/icons/eye-off.svg';
import { ReactComponent as FilterIcon } from 'src/assets/icons/filter.svg';
import { ReactComponent as FlagGBIcon } from 'src/assets/icons/gb.svg';
import { ReactComponent as LoaderIcon } from 'src/assets/icons/loader-2.svg';
import { ReactComponent as MenuIcon } from 'src/assets/icons/menu-2.svg';
import { ReactComponent as MessageIcon } from 'src/assets/icons/message-circle.svg';
import { ReactComponent as MoonIcon } from 'src/assets/icons/moon.svg';
import { ReactComponent as FlagPLIcon } from 'src/assets/icons/pl.svg';
import { ReactComponent as PlusIcon } from 'src/assets/icons/plus.svg';
import { ReactComponent as RefreshIcon } from 'src/assets/icons/refresh.svg';
import { ReactComponent as SearchIcon } from 'src/assets/icons/search.svg';
import { ReactComponent as HomeIcon } from 'src/assets/icons/smart-home.svg';
import { ReactComponent as SortAscIcon } from 'src/assets/icons/sort-ascending-2.svg';
import { ReactComponent as SortDescIcon } from 'src/assets/icons/sort-descending-2.svg';
import { ReactComponent as SunIcon } from 'src/assets/icons/sun.svg';
import { ReactComponent as WalletIcon } from 'src/assets/icons/wallet.svg';
import { ReactComponent as CloseIcon } from 'src/assets/icons/x.svg';

import style from './Icon.module.scss';

export type IconNames =
  | 'close'
  | 'plus'
  | 'tick'
  | 'loader'
  | 'discord'
  | 'twitter'
  | 'wallet'
  | 'home'
  | 'search'
  | 'message'
  | 'ethereum'
  | 'dollar'
  | 'store'
  | 'arrowRight'
  | 'arrowBadge'
  | 'menu'
  | 'moon'
  | 'sun'
  | 'eye'
  | 'eyeOff'
  | 'filter'
  | 'flagPL'
  | 'flagGB'
  | 'flagDE'
  | 'sortAsc'
  | 'sortDesc'
  | 'terminal'
  | 'refresh'
  | 'chartBar'
  | 'chartRadar'
  | 'chartTune'
  | 'chartArea'
  | 'chartBubble'
  | 'chartCandlestick'
  | 'chartDonut'
  | 'chartHeatmap'
  | 'chartLine'
  | 'chartPie'
  | 'chartPolarArea'
  | 'chartRadialBar'
  | 'chartRangeBar'
  | 'chartScatter'
  | 'chartTreemap'
  | 'chartBoxPlot';

interface IconProps extends Partial<HTMLAnchorElement> {
  name: IconNames;
  link?: string;
  small?: boolean;
  svgProps?: object;
  gray?: boolean;
  colored?: boolean;
  noPointerEvents?: boolean;
}

const Icon = (props: IconProps) => {
  const { name, className, link, small, svgProps, gray, colored, noPointerEvents } = props;

  const iconProps = {
    className: classNames(style.icon, className, {
      [style.small]: small,
      [style.gray]: gray,
      [style.colored]: colored,
      [style.noPointerEvents]: noPointerEvents
    }),
    ...svgProps
  };

  const Icons: Record<IconProps['name'], any> = {
    close: CloseIcon,
    tick: TickIcon,
    loader: LoaderIcon,
    discord: DiscordIcon,
    twitter: TwitterIcon,
    wallet: WalletIcon,
    home: HomeIcon,
    search: SearchIcon,
    message: MessageIcon,
    ethereum: EthereumIcon,
    dollar: DollarIcon,
    store: StoreIcon,
    arrowRight: ArrowRightIcon,
    arrowBadge: ArrowBadgeIcon,
    menu: MenuIcon,
    moon: MoonIcon,
    sun: SunIcon,
    refresh: RefreshIcon,
    eye: EyeIcon,
    eyeOff: EyeOffIcon,
    filter: FilterIcon,
    flagPL: FlagPLIcon,
    flagGB: FlagGBIcon,
    flagDE: FlagDEIcon,
    plus: PlusIcon,
    sortAsc: SortAscIcon,
    sortDesc: SortDescIcon,
    terminal: TerminalIcon,
    chartBar: ChartBarIcon,
    chartRadar: ChartRadarIcon,
    chartTune: ChartTuneIcon,
    chartArea: ChartAreaIcon,
    chartBubble: ChartBubbleIcon,
    chartCandlestick: ChartCandlestickIcon,
    chartDonut: ChartDonutIcon,
    chartHeatmap: ChartHeatmapIcon,
    chartLine: ChartLineIcon,
    chartPie: ChartPieIcon,
    chartPolarArea: ChartPolarAreaIcon,
    chartRadialBar: ChartRadialBarIcon,
    chartRangeBar: ChartRangeBarIcon,
    chartScatter: ChartScatterIcon,
    chartTreemap: ChartTreemapIcon,
    chartBoxPlot: ChartBoxPlotIcon
  };
  const IconComponent = Icons[name];

  if (link) {
    return (
      <a
        href={link}
        className={style.link}
        target='_blank'
        rel='noreferrer'
      >
        <IconComponent {...iconProps} />
      </a>
    );
  }
  return <IconComponent {...iconProps} />;
};

export default Icon;
