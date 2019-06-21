import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './views/landing/landing.component';
import { LogoComponent } from './shared/logo/logo.component';
import { LoggedInComponent } from './views/logged-in/logged-in.component';
import { LoggedOutComponent } from './views/logged-out/logged-out.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LogoComponent,
    LoggedInComponent,
    LoggedOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
