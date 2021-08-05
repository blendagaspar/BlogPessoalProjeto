
import{HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LoginComponent } from './login/login.component';

import { InicioComponent } from './inicio/inicio.component';
import { CadastrarComponent } from './cadastro/cadastro.component';
import { TemaComponent } from './tema/tema.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    LoginComponent,
    InicioComponent,
    CadastrarComponent,
    TemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,      //para não se perder nas rotas
    useClass: HashLocationStrategy  //para não se perder nas rotas
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
