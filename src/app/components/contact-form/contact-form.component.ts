import { ContactService } from './../../services/contact.service';
import { Contact } from './../../models/contact';
import { Component, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnChanges {

  @Input() selected: Contact;
  @Output() selectContact = new EventEmitter();

  public contactForm: FormGroup;
  private phoneNumberPattern: ValidatorFn;

  constructor(public contactService:ContactService) {

    this.phoneNumberPattern = Validators.pattern('[- +()0-9]+');

    this.contactForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl(''),
      phoneNumber: new FormControl('', this.phoneNumberPattern)
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.selected = changes.selected.currentValue;
    this.initForm();
  }

  private initForm(){

    //ADD
    if (this.selected == undefined || this.selected.id == -1){

      this.contactForm = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        address: new FormControl(''),
        phoneNumber: new FormControl('', this.phoneNumberPattern)
      });

    //EDIT
    }else{

      this.contactForm = new FormGroup({
        firstName: new FormControl(this.selected.firstName, Validators.required),
        lastName: new FormControl(this.selected.lastName, Validators.required),
        email: new FormControl(this.selected.email, Validators.required),
        address: new FormControl(this.selected.address),
        phoneNumber: new FormControl(this.selected.phoneNumber, this.phoneNumberPattern)
      });
    }
  }

  saveForm(){

    if (this.contactForm.valid){

      let formModel = this.contactForm.value;

      //EDIT
      if(this.selected.id != -1){
        formModel.id = this.selected.id;

      }else{//ADD
        formModel.id = -1;
      }

      let c = new Contact(formModel.id, formModel.firstName, formModel.lastName, formModel.email, formModel.address, formModel.phoneNumber);
      this.contactService.saveContact(c);
      this.selectContact.emit(undefined);
    }
  }

  cancel(){
    this.selectContact.emit(undefined);
  }

}
