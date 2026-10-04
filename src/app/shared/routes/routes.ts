import { HomeComponent } from '../home/home.component';
import { Routes } from '@angular/router';
import { BookOverviewComponent } from '../../book/book-overview/book-overview.component';
import { BookDetailsComponent } from '../../book/book-details/book-details.component';
import { BookDetailsResolver } from '../../book/book-details/book-details.resolver';
import { PersonalInfoOverviewComponent } from '../../personal-info/personal-info-overview/personal-info-overview.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'books',
    component: BookOverviewComponent
  },
  {
    path: 'book/:id',
    component: BookDetailsComponent,
    resolve: {
      book: BookDetailsResolver
    }
  },
  {
    path: 'book',
    component: BookDetailsComponent
  },
  {
    path: 'personal-info',
    component: PersonalInfoOverviewComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
