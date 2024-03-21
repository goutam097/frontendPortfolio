import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data/data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
  serviceList: any = [];

  constructor(
    private dataServ: DataService,
  ) {}

  ngOnInit() {}

  async ionViewWillEnter() {
    this.getServiceListApiCall();
  }

  async getServiceListApiCall() {
    await this.dataServ.getMethod(`service/list`).then(
      async (data) => {
        const res = JSON.parse(JSON.stringify(data));
        if (res?.success == true) {
          this.serviceList = res?.service || [];
        } else {
          this.serviceList = [];
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
