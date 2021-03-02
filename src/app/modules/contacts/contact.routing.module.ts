import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactContentComponent } from '../../components/contact-content/contact-content.component';

const routes: Routes = [
  {
    path: '',
    component: ContactContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
