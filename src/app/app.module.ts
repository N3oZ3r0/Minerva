import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { CarouselComponent } from './carousel/carousel.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ApunteComponent } from './apunte/apunte.component';
import { CrearApunteComponent } from './crear-apunte/crear-apunte.component';
import { BusquedaAvanzadaComponent } from './busqueda-avanzada/busqueda-avanzada.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SplashScreenComponent,
    CarouselComponent,
    RegisterComponent,
    LoginComponent,
    ApunteComponent,
    CrearApunteComponent,
    BusquedaAvanzadaComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
