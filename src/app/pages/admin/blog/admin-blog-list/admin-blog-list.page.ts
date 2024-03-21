import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data/data.service';

@Component({
  selector: 'app-admin-blog-list',
  templateUrl: './admin-blog-list.page.html',
  styleUrls: ['./admin-blog-list.page.scss'],
})
export class AdminBlogListPage implements OnInit {
  blogList: any = [];

  constructor(
    private dataServ: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addBlog(type:any){
    console.log(type,';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;')
    this.router.navigateByUrl(`/admin-blog-create/${type}`)
  }

  goTodo(id: any) {
    this.router.navigateByUrl('/admin-blog-create/edit/' + id);
  }

  view(id: any) {
    this.router.navigateByUrl('/admin-blog-create/view/' + id);
  }

  async deleteProductlist(blogId: any) {
    await this.dataServ
      .deleteMethod(`blogs/delete/${blogId}`)
      .then(async (data) => {
        const res = JSON.parse(JSON.stringify(data));
        if (res?.success == true) {
          this.blogList = this.blogList.filter(
            (post: any) => post._id != blogId
          );
        }
      });
  }

  async ionViewWillEnter() {
    this.getBlogListApiCall();
  }

  async getBlogListApiCall() {
    await this.dataServ.getMethod(`blogs/list`).then(
      async (data) => {
        const res = JSON.parse(JSON.stringify(data));
        if (res?.success == true) {
          this.blogList = res?.blogs || [];
        } else {
          this.blogList = [];
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
