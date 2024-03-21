import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
// import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  password :any = '123';
  isVisible: boolean = false;

  constructor(private modalController: ModalController) {}

  ngOnInit() {
  }

  async ionViewWillEnter() {
    console.log(this.isVisible)
  }

  submitPassword() {
    console.log('Submitted Password:', this.password);
    if (this.password === '123') {
      this.modalController.dismiss();
      this.isVisible = true
    } else {
      this.isVisible = false
      console.log('Incorrect Password');
    }
  }

  closeDialog() {
    this.modalController.dismiss();
  }

}
