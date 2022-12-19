import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { HomeComponent } from './pages/home/home.component';
import { OferecemosComponent } from './components/oferecemos/oferecemos.component';
import { ContatoComponent } from './components/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTitleComponent,
    SmallCardComponent,
    BigCardComponent,
    HomeComponent,
    OferecemosComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
