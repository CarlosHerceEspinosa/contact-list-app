import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//ROUTING
import { ContactRoutingModule } from './contact.routing.module';

//COMPONENT
import { ContactListComponent } from '../../components/contact-list/contact-list.component';
import { ContactContentComponent } from '../../components/contact-content/contact-content.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    ContactListComponent,
    ContactContentComponent,
    ContactFormComponent
  ],
  imports: [
    ContactRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContactsModule { }
