import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from "@angular/router";

import { MaterialModule } from "../material/material.module";
import { QuickStatsComponent } from "../../components/quick-stats/quick-stats.component";
import { CategoryCardComponent } from "../../components/category-card/category-card.component";
import { IndiaMapComponent } from "../../components/india-map/india-map.component";

@NgModule({
  declarations: [QuickStatsComponent, CategoryCardComponent, IndiaMapComponent],
  imports: [CommonModule, MaterialModule, FlexLayoutModule, RouterModule],
  exports: [QuickStatsComponent, CategoryCardComponent, IndiaMapComponent],
})
export class SharedModule {}
