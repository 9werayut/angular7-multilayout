import { Title } from '@angular/platform-browser';
import { ProfileComponent } from "./backend/profile/profile.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./frontend/home/home.component";
import { AboutComponent } from "./frontend/about/about.component";
import { ServiceComponent } from "./frontend/service/service.component";
import { ContactComponent } from "./frontend/contact/contact.component";
import { FrontendLayoutComponent } from "./frontend-layout/frontend-layout.component";
import { BackendLayoutComponent } from "./backend-layout/backend-layout.component";
import { DashboardComponent } from "./backend/dashboard/dashboard.component";
import { SettingsComponent } from "./backend/settings/settings.component";

let brand: string = " | GLS";

const routes: Routes = [
  {
    path: "",
    component: FrontendLayoutComponent,
    children: [
      { path: "", component: HomeComponent, pathMatch: "full",  },
      { path: "about", component: AboutComponent },
      { path: "service", component: ServiceComponent, data: { title: 'Service' + brand } },
      { path: "contact", component: ContactComponent, data: { title: 'Contact' + brand } }
    ]
  },
  {
    path: "backend",
    component: BackendLayoutComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "profile", component: ProfileComponent },
      { path: "settings", component: SettingsComponent }
    ]
  },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
