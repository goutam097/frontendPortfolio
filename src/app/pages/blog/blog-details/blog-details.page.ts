import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data/data.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.page.html',
  styleUrls: ['./blog-details.page.scss'],
})
export class BlogDetailsPage implements OnInit {
  blogId: any;
  blogDetails: any;
  latestBlog: any = [];
  similarproductList: any = [];

  constructor(
    private dataServ: DataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {}

  async ionViewWillEnter() {
    this.blogId = this.activatedRoute.snapshot.paramMap.get("id");
    this.getBlogDetailsApiCall(this.blogId);
    this.getBlogListApiCall();
  }

  async getBlogDetailsApiCall(blogId:any) {
    await this.dataServ.getMethod(`blogs/details/${blogId}`).then(
      async (data) => {
        const res = JSON.parse(JSON.stringify(data));
        if (res?.success == true) {
          this.blogDetails = res?.blog;
        } else {
          this.blogDetails = {};
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  async getBlogListApiCall() {
    await this.dataServ.getMethod(`blogs/list`).then(
      async (data) => {
        const res = JSON.parse(JSON.stringify(data));
        if (res?.success == true) {
          this.latestBlog = res?.blogs || [];
          this.similarproductList = this.latestBlog.filter((ele: any) => ele._id !== this.blogId);
        } else {
          this.latestBlog = [];
          this.similarproductList = [];
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
