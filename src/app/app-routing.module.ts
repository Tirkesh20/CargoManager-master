import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponsComponent } from './coupons/coupons.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
{path:'dashboard',component:DashboardComponent},
{path:'',redirectTo:'dashboard', pathMatch:'full'},
{path:'deals',component:CouponsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
