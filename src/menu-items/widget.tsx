// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { Story, Fatrows, PresentionChart, Chart21 } from 'iconsax-react';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = {
  widgets: Story,
  dashboard: Chart21,
  data: Fatrows,
  chart: PresentionChart
};

// ==============================|| MENU ITEMS - WIDGETS ||============================== //

const widget: NavItemType = {
  id: 'group-widget',
  title: <FormattedMessage id="Dashboard" />,
  icon: icons.widgets,
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: <FormattedMessage id="dashboard" />,
      type: 'item',
      url: '/dashboard/',
      icon: icons.dashboard,
      breadcrumbs: false
    },
    {
      id: 'projects',
      title: <FormattedMessage id="Projects" />,
      type: 'item',
      url: '/widget/data',
      icon: icons.data
    }
  ]
};

export default widget;
