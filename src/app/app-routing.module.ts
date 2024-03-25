import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

const routes: Routes = [
  {path: '', component: FirstComponentComponent},
  {path: 'list', component: ListRenderComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'if-render', component: IfRenderComponent},
  {path: 'eventos', component: EventosComponent},
  {path: 'list/:id', component: ItemDetailComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
