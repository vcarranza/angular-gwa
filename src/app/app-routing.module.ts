import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './views/landing/landing.component';
import { LoggedInComponent } from './views/logged-in/logged-in.component';
import { LoggedOutComponent } from './views/logged-out/logged-out.component';

const routes: Routes = [
  {path: 'landing', component:LandingComponent},
  {path:'', redirectTo: 'landing', pathMatch: 'full'},
  {path: 'logged-in', component:LoggedInComponent},
  {path: 'logged-out', component:LoggedOutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
