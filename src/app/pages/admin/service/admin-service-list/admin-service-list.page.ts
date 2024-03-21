import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data/data.service';

@Component({
  selector: 'app-admin-service-list',
  templateUrl: './admin-service-list.page.html',
  styleUrls: ['./admin-service-list.page.scss'],
})
export class AdminServiceListPage implements OnInit {
  serviceList: any = [];

  constructor(
    private dataServ: DataService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addService(type:any){
    this.router.navigateByUrl(`/admin-service-create/${type}`)
  }

  edit(id: any) {
    this.router.navigateByUrl('/admin-service-create/edit/' + id);
  }

  view(id: any) {
    this.router.navigateByUrl('/admin-service-create/view/' + id);
  }

  async deleteProductlist(serviceId: any) {
    await this.dataServ
      .deleteMethod(`service/delete/${serviceId}`)
      .then(async (data) => {
        const res = JSON.parse(JSON.stringify(data));
        if (res?.success == true) {
          this.serviceList = this.serviceList.filter(
            (post: any) => post._id != serviceId
          );
        }
      });
  }

  async ionViewWillEnter() {
    this.getServiceListApiCall();
  }

  async getServiceListApiCall() {
    await this.dataServ.getMethod(`service/list`).then(
      async (data) => {
        const res = JSON.parse(JSON.stringify(data));
        if (res?.success == true) {
          this.serviceList = res?.services || [];
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
