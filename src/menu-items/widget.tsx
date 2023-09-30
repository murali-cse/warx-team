// third-party

// assets
import { Story, Fatrows, PresentionChart, Chart21, Cd, Document } from 'iconsax-react';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = {
  widgets: Story,
  dashboard: Chart21,
  data: Fatrows,
  chart: PresentionChart,
  tickets: Cd,
  reports: Document
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
      type: 'item',
      url: '/project/',
      icon: icons.data,
      breadcrumbs: false
    },
    {
      id: 'tickets',
      title: 'Tickets',
      type: 'item',
      url: '/tickets',
      icon: icons.tickets,
      breadcrumbs: false
    },
    {
      id: 'reports',
      title: 'Reports',
      type: 'item',
      url: '/reports',
      icon: icons.reports,
      breadcrumbs: false
    }
  ]
};

export default widget;
