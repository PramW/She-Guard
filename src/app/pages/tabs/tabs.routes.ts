import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'safety-patrol',
        loadComponent: () =>
          import('../safety-patrol/safety-patrol.page').then(
            (m) => m.SafetyPatrolPage
          ),
      },
      {
        path: 'panic-button',
        loadComponent: () =>
          import('../panic-button/panic-button.page').then(
            (m) => m.PanicButtonPage
          ),
      },
      {
        path: 'notification',
        loadComponent: () =>
          import('../notification/notification.page').then(
            (m) => m.NotificationPage
          ),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../profile/profile.page').then((m) => m.ProfilePage),
      },

      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
];
