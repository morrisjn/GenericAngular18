import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  imports: [
    RouterOutlet,
    RouterModule.forRoot(routes),
    BrowserModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
