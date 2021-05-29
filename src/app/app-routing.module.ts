import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { FilesComponent} from './files/files.component';
import { LikeComponent} from './like/like.component';
import { BarsComponent} from './bars/bars.component';
import { LoginComponent} from './login/login.component';
import { RegisterComponent} from './register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch:"full"},
  { path: 'favoritos', component: LikeComponent, pathMatch:"full"},
  { path: 'apuntes', component: FilesComponent, pathMatch:"full"},
  { path: 'estadisticas', component: BarsComponent, pathMatch:"full"},
  { path: 'login', component: LoginComponent, pathMatch:"full"},
  { path: 'register', component: RegisterComponent, pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
