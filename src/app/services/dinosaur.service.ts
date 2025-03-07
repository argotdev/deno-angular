// src/app/services/dinosaur.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Dinosaur } from '../models/dinosaur.model';

interface DinosaurResponse {
  dinosaurs: Dinosaur[];
}

@Injectable({
  providedIn: 'root'
})
export class DinosaurService {
  private readonly dataPath = '/assets/data/dinosaurs.json';

  constructor(private http: HttpClient) {}

  getAllDinosaurs(): Observable<Dinosaur[]> {
    return this.http.get<DinosaurResponse>(this.dataPath).pipe(
      map(response => response.dinosaurs)
    );
  }

  getDinosaurByName(name: string): Observable<Dinosaur | undefined> {
    return this.getAllDinosaurs().pipe(
      map(dinosaurs => dinosaurs.find(
        dino => dino.name.toLowerCase() === name.toLowerCase()
      ))
    );
  }
}