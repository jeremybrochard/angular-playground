import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { setPageName } from './utils/set-page-name';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: setPageName('Home'),
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: setPageName('About'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
