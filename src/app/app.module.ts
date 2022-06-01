import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AndresComponentComponent } from './components/andres-component/andres-component.component';
import { PaulComponentComponent } from './components/paul-component/paul-component.component';
import { NicolaeComponentComponent } from './components/nicolae-component/nicolae-component.component';
import { KasiaComponentComponent } from './components/kasia-component/kasia-component.component';
import { VijayaComponentComponent } from './components/vijaya-component/vijaya-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AndresComponentComponent,
    PaulComponentComponent,
    NicolaeComponentComponent,
    KasiaComponentComponent,
    VijayaComponentComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
