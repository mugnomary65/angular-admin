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
    name: 'Settings',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
   
           {
        name: 'Clientes',
        url: '/base/listclientes',
        icon: 'icon-puzzle'
      },
      {
        name: 'Services',
        url: '/base/listProduct',
        icon: 'icon-puzzle'
      }, 
    
   
    
    ]
  }, 
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-star'
      },
     
    ]
  },
   
];
