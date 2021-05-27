import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { FilesComponent} from './files/files.component';
import { LikeComponent} from './like/like.component';
import { BarsComponent} from './bars/bars.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch:"full"},
  { path: 'favoritos', component: LikeComponent, pathMatch:"full"},
  { path: 'apuntes', component: FilesComponent, pathMatch:"full"},
  { path: 'estadisticas', component: BarsComponent, pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
