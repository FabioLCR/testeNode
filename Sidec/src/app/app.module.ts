import { BrowserModule } from '@angular/platform-browser';

import { NgModule, APP_INITIALIZER } from '@angular/core';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { initializer } from './app-init';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SidecHeaderComponent } from './sidec-header/sidec-header.component';


@NgModule({
  declarations: [
    AppComponent,
    SidecHeaderComponent
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: '**',
        component: AppComponent
      }
    ], { useHash: true }),
    BrowserModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
