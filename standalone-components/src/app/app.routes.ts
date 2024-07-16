import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { getPageName } from './utils/get-page-name';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: getPageName('Home'),
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: getPageName('About'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
