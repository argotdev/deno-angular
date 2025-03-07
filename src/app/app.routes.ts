import { Routes } from '@angular/router';
import { DinosaurListComponent } from './components/dinosaur-list/dinosaur-list.component';
import { DinosaurDetailComponent } from './components/dinosaur-detail/dinosaur-detail.component';

export const routes: Routes = [
  { path: '', component: DinosaurListComponent },
  { path: 'dinosaur/:name', component: DinosaurDetailComponent },
  { path: '**', redirectTo: '' }
];
