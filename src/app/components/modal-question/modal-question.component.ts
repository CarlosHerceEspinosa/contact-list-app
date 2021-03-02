import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal-question',
  templateUrl: './modal-question.component.html'
})

export class ModalQuestionComponent {

	/* * * * *  VARIABLES  * * * * */

	@Input() public msg: any;

	/* * * * *  PRIVATE FUNCTIONS  * * * * */

	constructor(public activeModal: NgbActiveModal) { }

  	/* * * * *  PUBLIC FUNCTIONS  * * * * */

}
