import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Contact } from '../models/contact';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

/*Components*/
import { ModalQuestionComponent } from '../components/modal-question/modal-question.component';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  //variables
  private contactList: Contact[] = new Array<Contact>();
  private modalRef: NgbModalRef;

  // Observable sources
  private contactListSource = new Subject<Contact[]>();

  // Observable streams
  public contactListChange$ = this.contactListSource.asObservable();

  constructor(private modalBoostrap: NgbModal) {

    this.contactList = [
      new Contact(1, "Mike", "Nash", "mikensh@gmail.com", "716 Grasskamp Place", "505-826-4875"),
      new Contact(2, "Robinet", "Chippin", "rchippin1@soundcloud.com", "022 Washington Hill", "783-964-6666"),
      new Contact(3, "Sal", "Grooby", "sgrooby2@amazon.com", "5404 Bunting Alley", "371-202-2018"),
      new Contact(4, "Carmen", "", "", "", ""),
      new Contact(5, "Pedro", "", "", "", ""),
      new Contact(6, "Francisco", "", "", "", ""),
      new Contact(7, "David", "", "", "", ""),
      new Contact(8, "José Manuel", "", "", "", "")
    ]
  }

  public saveContact(data: Contact) {

    if(data.id == -1){
      data.id = this.contactList.length;
      this.contactList.push(data);
    }else{
      this.contactList.forEach((val, key, array) => {
        if (val.id == data.id) {
          array[key] = data;
        }
      });
    }


    this.contactListSource.next(this.contactList);
  }

  public getContactList(){
    return this.contactList;
  }

  public deleteContact(data: Contact) {

    this.openModalQuestion('Do you really want to delete this contact?').then(
      (result) => {
        this.contactList.forEach((val, key, array) => {
          if (val.id == data.id) {
            array.splice(key, 1);
          }
        });

        this.contactListSource.next(this.contactList);
      },
      (dismiss) => {
        //nothing to do
      }
    );
  }

  private openModalQuestion(msg: string) {

    let modalRef = this.modalBoostrap.open(ModalQuestionComponent, { windowClass: 'notification', backdrop: 'static', keyboard: false });

    modalRef.componentInstance.msg = msg;

    return modalRef.result;
  }
}
