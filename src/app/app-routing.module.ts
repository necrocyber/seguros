import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component'

const routes: Routes = [
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  { component: FormComponent, path: 'form' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
