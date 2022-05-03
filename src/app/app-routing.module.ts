import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponsComponent } from './coupons/coupons.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
{path:'dashboard',component:DashboardComponent},
{path:'',component:DashboardComponent},
{path:'logic',component:CouponsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
