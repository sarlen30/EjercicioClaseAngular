import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ArticulosComponent} from "./pages/articulos/articulos.component";
import {NotfoundComponent} from "./pages/notfound/notfound.component";
import {DialogComponent} from "./pages/dialog/dialog/dialog.component";
import {PipesComponent} from "./pages/pipes/pipes.component";
import {ArticuloDetailComponent} from "./pages/articulo-detail/articulo-detail.component";

const routes: Routes = [


  { path: 'home', component: HomeComponent
  },

  {path: 'articulos', component: ArticulosComponent},
  {path: 'dialog', component: DialogComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'detail', component: ArticuloDetailComponent},

  {path: '', redirectTo: '/home', pathMatch: "full"},

  {path:'**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
