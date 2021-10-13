import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core/core.module";
import {AdminModule} from "./admin/admin.module";
import {ClientModule} from "./client/client.module";
import { HomeComponent } from './agritourism/home/home.component';
import { AboutUsComponent } from './agritourism/about-us/about-us.component';
import { FaqComponent } from './agritourism/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    CoreModule,
    AdminModule,
    ClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
