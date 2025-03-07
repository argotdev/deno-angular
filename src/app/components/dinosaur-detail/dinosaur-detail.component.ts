// src/app/components/dinosaur-detail/dinosaur-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DinosaurService } from '../../services/dinosaur.service';
import { Dinosaur } from '../../models/dinosaur.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dinosaur-detail',
  template: `
    <div class="container mx-auto p-4" *ngIf="dinosaur">
      <h1 class="text-3xl font-bold mb-4">{{dinosaur.name}}</h1>
      <p class="mb-4">{{dinosaur.description}}</p>
      <a routerLink="/" class="text-blue-600 hover:underline">
        Back to all dinosaurs
      </a>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class DinosaurDetailComponent implements OnInit {
  dinosaur?: Dinosaur;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dinosaurService: DinosaurService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const name = params['name'];
      this.dinosaurService.getDinosaurByName(name)
        .subscribe(dinosaur => {
          if (!dinosaur) {
            this.router.navigate(['/']);
          } else {
            this.dinosaur = dinosaur;
          }
        });
    });
  }
}