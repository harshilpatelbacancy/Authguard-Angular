import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthenticationComponent } from './authentication/authentication.component';

const routes:Routes = [
  { path: "", component: PageNotFoundComponent },
  { path: "authorization", component: AuthenticationComponent }
]

@NgModule({
  declarations: [PageNotFoundComponent, AuthenticationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PageNotFoundModule { }
