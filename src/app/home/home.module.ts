import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../gaurds/auth-guard.service';
import { ActivateChildGuard } from '../gaurds/activate-child.guard';
import { CanDeactivateGuard } from '../gaurds/can-deactivate.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeChildComponent } from './home-child/home-child.component';
import { DirectivesModule } from '../directives/directives.module';

const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [AuthGuardService] },
  {
    path: "adminDashboard",
    component: AdminDashboardComponent,
    canActivate: [AuthGuardService],
    data: { expectedRole: "admin" },
    canActivateChild: [ActivateChildGuard],
    children: [
      { path: "homechild", component: HomeChildComponent, canDeactivate: [CanDeactivateGuard] }
    ],
  }
]

@NgModule({
  declarations: [HomeComponent, AdminDashboardComponent, HomeChildComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DirectivesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard
  ]
})
export class HomeModule { }
