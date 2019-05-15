import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './frontend/about/about.component';
import { ServiceComponent } from './frontend/service/service.component';
import { ContactComponent } from './frontend/contact/contact.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { ProfileComponent } from './backend/profile/profile.component';
import { SettingsComponent } from './backend/settings/settings.component';
import { HomeComponent } from './frontend/home/home.component';
import { FrontendLayoutComponent } from './frontend-layout/frontend-layout.component';
import { BackendLayoutComponent } from './backend-layout/backend-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    DashboardComponent,
    ProfileComponent,
    SettingsComponent,
    HomeComponent,
    FrontendLayoutComponent,
    BackendLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
