import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SwiperComponent } from './swiper/swiper.component';
import { HomeComponent } from './home/home.component';
import { LikeComponent } from './like/like.component';
import { FilesComponent } from './files/files.component';
import { BarsComponent } from './bars/bars.component';
import { SwiperModule } from 'swiper/angular';
import { SearchComponent } from './search/search.component';
import { NewfileComponent } from './newfile/newfile.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ShowMyFileComponent } from './show-my-file/show-my-file.component';
import { ChatComponent } from './chat/chat.component';
import { ChatUserComponent } from './chat-user/chat-user.component';
import { UserComponent } from './user/user.component';
import { FriendsComponent } from './friends/friends.component';
import { FavFilesComponent } from './fav-files/fav-files.component';
import { WalletComponent } from './wallet/wallet.component';
import { ShowOtherFileComponent } from './show-other-file/show-other-file.component';
import { ResultSearchComponent } from './result-search/result-search.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SplashScreenComponent,
    CarouselComponent,
    SwiperComponent,
    HomeComponent,
    LikeComponent,
    FilesComponent,
    BarsComponent,
    SearchComponent,
    NewfileComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    ShowMyFileComponent,
    ChatComponent,
    ChatUserComponent,
    UserComponent,
    FriendsComponent,
    FavFilesComponent,
    WalletComponent,
    ShowOtherFileComponent,
    ResultSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
