import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  RouterModule } from '@angular/router';

//  rutas padres
import { AppRoutingModule } from './app.routes';

//componentes
import { AppComponent } from './app.component';
import { NopagefoundComponent } from '../app/nopagefound/nopagefound.component';

// modulos
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AuthModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
