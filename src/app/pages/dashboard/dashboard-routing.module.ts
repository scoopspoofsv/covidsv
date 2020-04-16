import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./home/home.module").then((m) => m.HomeModule),
      },
      {
        path: "news",
        loadChildren: () =>
          import("./news/news.module").then((m) => m.NewsModule),
      },
      {
        path: "settings",
        loadChildren: () =>
          import("./settings/settings.module").then((m) => m.SettingsModule),
      },
      {
        path: "state-detail",
        loadChildren: () =>
          import("./state-detail/state-detail.module").then(
            (m) => m.StateDetailModule
          ),
      },
      {
        path: "stats",
        loadChildren: () =>
          import("./stats/stats.module").then((m) => m.StatsModule),
      },
      {
        path: "world",
        loadChildren: () =>
          import("./world/world.module").then((m) => m.WorldModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
