import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SiteDetailsModule } from './site-details/site-details.module';
import { InfoModule } from './info/info.module';
import { AboutUsModule } from './about-us/about-us.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SiteDetailsModule,
    InfoModule,
    SiteDetailsModule,
    AboutUsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
