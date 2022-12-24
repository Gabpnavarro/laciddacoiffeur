import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ContentComponent } from './pages/content/content.component';
import { ServicePhotosComponent } from './components/service-photos/service-photos.component';
import { SalaoDeBelezaComponent } from './components/salao-de-beleza/salao-de-beleza.component';
import { BemVindoComponent } from './components/bem-vindo/bem-vindo.component';
import { ServicosComponent } from './components/servicos/servicos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTitleComponent,
    HomeComponent,
    ContatoComponent,
    ContentComponent,
    ServicePhotosComponent,
    SalaoDeBelezaComponent,
    BemVindoComponent,
    ServicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
