import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  personalDetails: any;
  language: any = [];
  intrest: any = [];

  constructor(
    private dataServ: DataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {}

  async ionViewWillEnter() {
    this.getPersonalDetailsApiCall();
  }

  async getPersonalDetailsApiCall() {
    await this.dataServ.getMethod(`personal/list`).then(
      async (data) => {
        const res = JSON.parse(JSON.stringify(data));
        if (res?.success == true) {
          this.personalDetails = res?.personal[0];
          this.language = res?.personal[0]?.spokenLanguages
          this.intrest = res?.personal[0]?.interests
        } else {
          // this.blogDetails = {};
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
