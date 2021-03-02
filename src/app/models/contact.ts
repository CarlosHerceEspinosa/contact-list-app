export class Contact {

    id: number;
    firstName:string;
    lastName:string;
    email:string;
    address: string;
    phoneNumber:string;

  constructor(id: number = -1, firstName: string = '', lastName: string = '', email: string = '', address: string = '', phoneNumber:string = ''){

        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }
}
