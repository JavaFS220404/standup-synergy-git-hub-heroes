import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AndresComponentComponent } from './components/andres-component/andres-component.component';
import { PaulComponentComponent } from './components/paul-component/paul-component.component';
import { NicolaeComponentComponent } from './components/nicolae-component/nicolae-component.component';
import { KasiaComponentComponent } from './components/kasia-component/kasia-component.component';
import { VijayaComponentComponent } from './components/vijaya-component/vijaya-component.component';

const routes: Routes = [{
  path: 'Andres',
  component: AndresComponentComponent
}, {
  path: 'Paul',
  component: PaulComponentComponent
}, {
    path: 'Nicolae',
  component: NicolaeComponentComponent
}, {
    path: 'Kasia',
  component: KasiaComponentComponent
}, {
    path: 'Vijaya',
  component: VijayaComponentComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
