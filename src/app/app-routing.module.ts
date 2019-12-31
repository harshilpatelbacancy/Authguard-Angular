import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanLoadGuard } from './gaurds/can-load.guard';

const routes: Routes = [
  { path: "", redirectTo: "registration/login", pathMatch: "full"},
  { path: "registration", loadChildren:() => import('./registration/registration.module').then(mod => mod.RegistrationModule) },
  { path: "home", loadChildren:() => import('./home/home.module').then(mod => mod.HomeModule), canLoad: [CanLoadGuard]},
  { path: "pageNotFound", loadChildren:() => import('./page-not-found/page-not-found.module').then(mod => mod.PageNotFoundModule)},
  { path: "**", loadChildren:() => import('./page-not-found/page-not-found.module').then(mod => mod.PageNotFoundModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
