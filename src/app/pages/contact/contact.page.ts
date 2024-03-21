import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  name: any;
  email: any;
  subject: any;
  contactText: any;
  message: any;
  constructor() {}

  ngOnInit() {}

  async submitContact(form: NgForm) {
    if (form.invalid) {
      return;
    }
    let jData = {
      user_name: this.name,
      user_email: this.email,
      user_subject: this.subject,
      user_contact: this.contactText,
      user_message: this.message,
    };

    emailjs
      .send('service_zs3kx14', 'template_26f78pa', jData, {
        publicKey: 'aw9HkN8Z3L-7JVbZy',
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
          console.log('FAILED...', err);
        }
      );
  }
}
