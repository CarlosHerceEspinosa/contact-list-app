import { ContactService } from './../../services/contact.service';
import { Contact } from '../../models/contact';
import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-contact-content',
  templateUrl: './contact-content.component.html',
  styleUrls: ['./contact-content.component.css']
})
export class ContactContentComponent implements OnInit {

  public contactList: Contact[] = new Array<Contact>();
  public contactSelected: Contact;

  private contactListSubscription: Subscription;

  constructor(public contactService: ContactService) {

    //LISTENER
    this.contactListSubscription = this.contactService.contactListChange$.subscribe(
      content => this.contactList = content
    );

    this.contactList = this.contactService.getContactList();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    //LISTENERS
    this.contactListSubscription.unsubscribe();
  }

  showContact(event) {
    this.contactSelected = event;
  }

  newContact(){
    this.contactSelected = new Contact(-1);
  }

  deleteContact(event) {
    this.contactSelected = undefined;
    this.contactService.deleteContact(event);
  }

}
