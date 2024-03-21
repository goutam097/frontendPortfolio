import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data/data.service';

@Component({
  selector: 'app-admin-personal-details-list',
  templateUrl: './admin-personal-details-list.page.html',
  styleUrls: ['./admin-personal-details-list.page.scss'],
})
export class AdminPersonalDetailsListPage implements OnInit {
  personalList: any = [];

  constructor(
    private dataServ: DataService,
    // private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.getPersonalListApiCall();
  }

  addPersonal(type:any){
    console.log(type,';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;')
    this.router.navigateByUrl(`/admin-personal-details-create/${type}`)
  }

  goTodo(id: any) {
    this.router.navigateByUrl('/admin-personal-details-create/edit/' + id);
  }

  view(id: any) {
    this.router.navigateByUrl('/admin-personal-details-create/view/' + id);
  }

  async deleteProductlist(personalId: any) {
    await this.dataServ
      .deleteMethod(`personal/delete/${personalId}`)
      .then(async (data) => {
        const res = JSON.parse(JSON.stringify(data));
        if (res?.success == true) {
          this.personalList = this.personalList.filter(
            (post: any) => post._id != personalId
          );
        }
      });
  }



  async getPersonalListApiCall() {
    await this.dataServ.getMethod(`personal/list`).then(
      async (data) => {
        const res = JSON.parse(JSON.stringify(data));
        if (res?.success == true) {
          this.personalList = res?.personal || [];
        } else {
          this.personalList = [];
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
