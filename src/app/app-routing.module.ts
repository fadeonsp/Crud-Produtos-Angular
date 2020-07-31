import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoListComponent } from './produtos/produto-list/produto-list.component';
import { ProdutoFormComponent } from './produtos/produto-form/produto-form.component';

const routes: Routes = [
  { path: 'produtos', component: ProdutoListComponent},
  { path: 'produtos/novo', component: ProdutoFormComponent},
  { path: 'produtos/editar/:id', component: ProdutoFormComponent},
  { path: '', redirectTo: '/produtos', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
