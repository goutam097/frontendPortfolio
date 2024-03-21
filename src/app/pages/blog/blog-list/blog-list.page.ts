import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data/data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.page.html',
  styleUrls: ['./blog-list.page.scss'],
})
export class BlogListPage implements OnInit {
  blogList: any = [];

  constructor(
    private dataServ: DataService,
    private route: Router
  )
  {}

  ngOnInit() {}

  async ionViewWillEnter() {
    this.getBlogListApiCall();
  }

  async getBlogListApiCall() {
    await this.dataServ.getMethod(`blogs/list`).then(
      async (data) => {
        const res = JSON.parse(JSON.stringify(data));
        if (res?.success == true) {
          this.blogList = res?.blogs || [];
          console.log(this.blogList);
        } else {
          this.blogList = [];
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  goToBlogDetails(blogId: any) {
    this.route.navigateByUrl(`/blog-details/${blogId}`);
  }
}
