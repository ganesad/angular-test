import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team/team.component';
import { SupportComponent } from './support/support.component';



@NgModule({
  declarations: [TeamComponent, SupportComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SupportComponent,
    TeamComponent,
  ]
})
export class AboutUsModule { }
