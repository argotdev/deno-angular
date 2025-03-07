// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DinosaurListComponent } from './components/dinosaur-list/dinosaur-list.component';
import { DinosaurDetailComponent } from './components/dinosaur-detail/dinosaur-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DinosaurListComponent,
    DinosaurDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }