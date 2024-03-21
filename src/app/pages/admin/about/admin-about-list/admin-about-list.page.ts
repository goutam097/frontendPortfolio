import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data/data.service';

@Component({
  selector: 'app-admin-about-list',
  templateUrl: './admin-about-list.page.html',
  styleUrls: ['./admin-about-list.page.scss'],
})
export class AdminAboutListPage implements OnInit {
  aboutList: any = [];

  constructor(
    private dataServ: DataService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addAbout(type:any){
    this.router.navigateByUrl(`/admin-about-create/${type}`)
  }

  goTodo(id: any) {
    this.router.navigateByUrl('/admin-about-create/edit/' + id);
  }

  view(id: any) {
    this.router.navigateByUrl('/admin-about-create/view/' + id);
  }

  async deleteProductlist(aboutId: any) {
    await this.dataServ
      .deleteMethod(`abouts/delete/${aboutId}`)
      .then(async (data) => {
        const res = JSON.parse(JSON.stringify(data));
        if (res?.success == true) {
          this.aboutList = this.aboutList.filter(
            (post: any) => post._id != aboutId
          );
        }
      });
  }

  async ionViewWillEnter() {
    this.getBlogListApiCall();
  }

  async getBlogListApiCall() {
    await this.dataServ.getMethod(`abouts/list`).then(
      async (data) => {
        const res = JSON.parse(JSON.stringify(data));
        if (res?.success == true) {
          this.aboutList = res?.abouts || [];
        } else {
          this.aboutList = [];
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
