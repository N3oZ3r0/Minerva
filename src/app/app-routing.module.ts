import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { FilesComponent} from './files/files.component';
import { LikeComponent} from './like/like.component';
import { BarsComponent} from './bars/bars.component';
import { LoginComponent} from './login/login.component';
import { RegisterComponent} from './register/register.component';
import { ShowOtherFileComponent} from './show-other-file/show-other-file.component';
import { ResultSearchComponent} from './result-search/result-search.component';
import { ProfileComponent} from './profile/profile.component';
import { FavFilesComponent} from './fav-files/fav-files.component';
import { WalletComponent} from './wallet/wallet.component';
import { ChatComponent} from './chat/chat.component';
import { ChatUserComponent} from './chat-user/chat-user.component';
import { FriendsComponent} from './friends/friends.component';
import { UserComponent} from './user/user.component';
import { SearchComponent} from './search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch:"full"},
  { path: 'favoritos', component: LikeComponent, pathMatch:"full"},
  { path: 'apuntes', component: FilesComponent, pathMatch:"full"},
  { path: 'estadisticas', component: BarsComponent, pathMatch:"full"},
  { path: 'login', component: LoginComponent, pathMatch:"full"},
  { path: 'register', component: RegisterComponent, pathMatch:"full"},
  { path: 'otroapunte', component: ShowOtherFileComponent, pathMatch:"full"},
  { path: 'resultadobusqueda', component: ResultSearchComponent, pathMatch:"full"},
  { path: 'perfil', component: ProfileComponent, pathMatch:"full"},
  { path: 'archivosfav', component: FavFilesComponent, pathMatch:"full"},
  { path: 'cartera', component: WalletComponent, pathMatch:"full"},
  { path: 'chat', component: ChatComponent, pathMatch:"full"},
  { path: 'chatuser', component: ChatUserComponent, pathMatch:"full"},
  { path: 'amigos', component: FriendsComponent, pathMatch:"full"},
  { path: 'usuario', component: UserComponent, pathMatch:"full"},
  { path: 'busqueda', component: SearchComponent, pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
