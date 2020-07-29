import { Component } from '@angular/core';

import {
	Contacts,
	Contact,
	ContactName,
	ContactField,
} from '@ionic-native/contacts/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { ToastController } from '@ionic/angular';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	myContacts: Contact[] = [];

	constructor(
		private contacts: Contacts,
		private callNumber: CallNumber,
		private sms: SMS,
		private toastCtrl: ToastController
	) {}

	loadContacts() {
		let options = {
			filter: '',
			multiple: true,
			hasPhoneNumber: true,
		};

		this.contacts.find(['*'], options).then((contacts: Contact[]) => {
			this.myContacts = contacts;
			console.log('Contacts: ', contacts);
		});
	}

	sendSms(contact: Contact) {
		this.sms.send(contact.phoneNumbers[0].value, 'A predefined message');
	}

	call(contact: Contact) {
		this.callNumber.callNumber(contact.phoneNumbers[0].value, true);
	}

	createContact() {
		let contact: Contact = this.contacts.create();

		contact.name = new ContactName(null, 'Albus', 'Ape');
		contact.phoneNumbers = [new ContactField('mobile', '12345678')];
		contact.save().then(
			async () => {
				let toast = await this.toastCtrl.create({
					message: 'Contact added',
				});
				toast.present;
			},
			(error: any) => console.error('Error saving contact', error)
		);
	}
}
