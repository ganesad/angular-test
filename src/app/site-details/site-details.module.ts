import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteHitsComponent } from './website-hits/website-hits.component';
import { OtherInfoComponent } from './other-info/other-info.component';



@NgModule({
  declarations: [WebsiteHitsComponent, OtherInfoComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    WebsiteHitsComponent,
    OtherInfoComponent,
  ]
})
export class SiteDetailsModule { }
