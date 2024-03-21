import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../service/data/data.service';
import { ActivatedRoute } from '@angular/router';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  personalDetails: any;
  language: any = [];
  intrest: any = [];
  serviceList: any = [];
  blogList: any = [];
  testimonialList: any = [];
  index: any;

  constructor(
    private dataServ: DataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {}

  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
    this.swiper?.slideTo(this.index);
  }

  gonext() {
    this.swiper?.slideNext();
  }

  goprev() {
    this.swiper?.slidePrev();
  }

  async slideDidChange(ev: any) {
    const index = this.swiper?.activeIndex;
  }

  async ionViewWillEnter() {
    await Promise.all([
      this.getPersonalDetailsApiCall(),
      this.getServiceListApiCall(),
      this.getBlogListApiCall(),
      this.getTestimonialsListApiCall(),
    ]);
  }

  async getPersonalDetailsApiCall() {
    await this.dataServ.getMethod(`personal/list`).then(
      async (data) => {
        const res = JSON.parse(JSON.stringify(data));
        if (res?.success == true) {
          this.personalDetails = res?.personal[0];
          this.language = res?.personal[0]?.spokenLanguages
          this.intrest = res?.personal[0]?.interests
        } 
      },
      (err) => {
        console.log(err);
      }
    );
  }

  async getServiceListApiCall() {
    await this.dataServ.getMethod(`service/list`).then(
      async (data) => {
        const res = JSON.parse(JSON.stringify(data));
        if (res?.success == true) {
          this.serviceList = (res?.service || []).slice(0, 3);
        } else {
          this.serviceList = [];
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
          this.blogList = (res?.blogs || []).slice(0, 3);
        } else {
          this.blogList = [];
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  async getTestimonialsListApiCall() {
    await this.dataServ.getMethod(`testimonial/list`).then(
      async (data) => {
        const res = JSON.parse(JSON.stringify(data));
        if (res?.success == true) {
          this.testimonialList = res?.testimonial;
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
