import { Contact } from './../../models/contact';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Input() list: Contact[];
  @Output() selectContact = new EventEmitter();
  @Output() deleteContact = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  select(c) {
    this.selectContact.emit(c);
  }

  delete(c) {
    this.deleteContact.emit(c);
  }

}
