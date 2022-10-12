import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AppInterceptor } from "./interceptors/app.interceptor";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
