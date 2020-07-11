import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'AC VIDAL LLC',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'PRO'
    }
  },
  
  {
    title: true,
    name: 'Options'
  },
    {
        name: 'Clients',
        url: '/base/listclients',
        icon: 'icon-puzzle'
      },
      {
        name: 'Services',
        url: '/base/listservices',
        icon: 'icon-puzzle'
      },   
      {
        name: 'Inventory',
        url: '/base/inventary',
        icon: 'icon-puzzle'
      },   
   
    
   
 
   
];
