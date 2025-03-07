import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DinosaurListComponent } from './components/dinosaur-list/dinosaur-list.component';
import { DinosaurDetailComponent } from './components/dinosaur-detail/dinosaur-detail.component';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  imports: [RouterOutlet, DinosaurListComponent, DinosaurDetailComponent],
  standalone: true
})
export class AppComponent {} 