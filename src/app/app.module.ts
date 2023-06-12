import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { DeliveryServiceComponent } from './delivery-service/delivery-service.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    NavbarComponent,
    LoginComponent,
    DeliveryServiceComponent

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
