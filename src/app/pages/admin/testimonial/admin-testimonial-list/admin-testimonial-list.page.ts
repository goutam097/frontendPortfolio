import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data/data.service';

@Component({
  selector: 'app-admin-testimonial-list',
  templateUrl: './admin-testimonial-list.page.html',
  styleUrls: ['./admin-testimonial-list.page.scss'],
})
export class AdminTestimonialListPage implements OnInit {

  testimonialList: any = [];

  constructor(
    private dataServ: DataService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addBlog(type:any){
    this.router.navigateByUrl(`/admin-testimonial-create/${type}`)
  }

  goTodo(id: any) {
    this.router.navigateByUrl('/admin-testimonial-create/edit/' + id);
  }

  view(id: any) {
    this.router.navigateByUrl('/admin-testimonial-create/view/' + id);
  }

  async deleteProductlist(testimonialId: any) {
    await this.dataServ
      .deleteMethod(`testimonial/delete/${testimonialId}`)
      .then(async (data) => {
        const res = JSON.parse(JSON.stringify(data));
        if (res?.success == true) {
          this.testimonialList = this.testimonialList.filter(
            (post: any) => post._id != testimonialId
          );
        }
      });
  }

  async ionViewWillEnter() {
    this.getTestimonialListListApiCall();
  }

  async getTestimonialListListApiCall() {
    await this.dataServ.getMethod(`testimonial/list`).then(
      async (data) => {
        const res = JSON.parse(JSON.stringify(data));
        if (res?.success == true) {
          this.testimonialList = res?.testimonial || [];
        } else {
          this.testimonialList = [];
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
