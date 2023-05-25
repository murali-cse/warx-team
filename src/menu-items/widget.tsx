// third-party

// assets
import { Story, Fatrows, PresentionChart, Chart21, Cd } from 'iconsax-react';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = {
  widgets: Story,
  dashboard: Chart21,
  data: Fatrows,
  chart: PresentionChart,
  tickets: Cd
};

// ==============================|| MENU ITEMS - WIDGETS ||============================== //

const widget: NavItemType = {
  id: 'group-widget',
  title: 'Dashboard',
  icon: icons.widgets,
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/',
      icon: icons.dashboard,
      breadcrumbs: false
    },
    {
      id: 'project',
      title: 'Projects',
      type: 'collapse',
      url: '/project/',
      icon: icons.data,
      breadcrumbs: true,
      children: [
        {
          id: 'details',
          title: 'Details',
          type: 'item',
          url: '/project/details',
          breadcrumbs: true
        }
      ]
    },
    {
      id: 'tickets',
      title: 'Tickets',
      type: 'item',
      url: '/tickets',
      icon: icons.tickets
    }
  ]
};

export default widget;
