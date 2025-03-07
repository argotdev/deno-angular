// src/app/components/dinosaur-list/dinosaur-list.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Dinosaur } from '../../models/dinosaur.model';
import { DinosaurService } from '../../services/dinosaur.service';

@Component({
  selector: 'app-dinosaur-list',
  template: `
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold mb-4">Dinosaurs</h1>
      <div class="grid gap-4">
        <div *ngFor="let dinosaur of dinosaurs">
          <a [routerLink]="['/dinosaur', dinosaur.name]" class="block p-4 border rounded hover:bg-gray-50">
            <h2 class="text-xl font-bold">{{dinosaur.name}}</h2>
            
          </a>
        </div>
      </div>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class DinosaurListComponent {
  dinosaurs: Dinosaur[] = [];

  constructor(private dinosaurService: DinosaurService) {
    this.dinosaurService.getAllDinosaurs().subscribe(
      dinosaurs => this.dinosaurs = dinosaurs
    );
  }
}