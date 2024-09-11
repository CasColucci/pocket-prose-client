import { Routes } from '@angular/router';
import { SearchPageComponent } from './pages/search/search-page.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { ReadPageComponent } from './pages/read/read-page.component';

export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'search', component: SearchPageComponent},
  {path: 'read', component: ReadPageComponent}
];
