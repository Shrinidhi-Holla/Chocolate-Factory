import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HeroSectionComponent },
  { path: 'Hero', component:HeroSectionComponent},
  { path: 'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
