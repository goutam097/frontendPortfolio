import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/service/alert/alert.service';
import { DataService } from 'src/app/service/data/data.service';

@Component({
  selector: 'app-admin-personal-details-create',
  templateUrl: './admin-personal-details-create.page.html',
  styleUrls: ['./admin-personal-details-create.page.scss'],
})
export class AdminPersonalDetailsCreatePage implements OnInit {
  name: any;
  description: any;
  dob: any;
  nationality: any;
  phone: any;
  gmail: any;
  github: any;
  linkedin: any;
  twitter: any;
  facebook: any;
  instagram: any;
  intrest: any;
  intrestList: any = [];
  languageList: any = [];
  lang: any;
  personalId: any;
  type: any;

  constructor(
    private dataServ: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertServe: AlertService
  ) {}

  ngOnInit() {}

  async ionViewWillEnter() {
    this.type = this.activatedRoute.snapshot.paramMap.get('type');
    console.log(this.type);
    this.personalId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.type == 'edit' || this.type == 'view') {
      this.getPersonalDetailsApiCall();
    }
  }

  addLanguages() {
    if (!this.languageList.includes(this.lang.trim())) {
      this.languageList.push(this.lang.trim());
      this.lang = null;
    } else {
      this.alertServe.presentToast('This language is already added');
    }
  }

  removeLanguages(index: number) {
    this.languageList.splice(index, 1);
  }

  addInterests() {
    if (!this.intrestList.includes(this.intrest.trim())) {
      this.intrestList.push(this.intrest.trim());
      this.intrest = null;
    } else {
      this.alertServe.presentToast('This intrest is already added');
    }
  }

  removeIntrest(index: number) {
    this.intrestList.splice(index, 1);
  }

  async submitService(form: NgForm) {
    if (form.invalid) {
      return;
    }
    let jsonData = {
      name: this.name,
      description: this.description,
      dob: this.dob,
      spokenLanguages: this.languageList,
      nationality: this.nationality,
      interests: this.intrestList,
      phone: this.phone,
      gmail: this.gmail,
      github: this.github,
      linkedin: this.linkedin,
      twitter: this.twitter,
      facebook: this.facebook,
      instagram: this.instagram,
    };
    if (this.personalId) {
      await this.dataServ
        .putMethod(jsonData, `personal/update/${this.personalId}`)
        .then(async (data) => {
          const res = JSON.parse(JSON.stringify(data));
          if (res?.success == true) {
            this.router.navigateByUrl('/admin-personal-details-list');
          }
        });
    } else {
      await this.dataServ
        .postMethod(jsonData, 'create/personal')
        .then(async (data) => {
          const res = JSON.parse(JSON.stringify(data));
          if (res?.success == true) {
            this.router.navigateByUrl('/admin-personal-details-list');
          }
        });
    }
  }

  async getPersonalDetailsApiCall() {
    await this.dataServ.getMethod(`personal/details/${this.personalId}`).then(
      async (data) => {
        const res = JSON.parse(JSON.stringify(data));
        if (res?.success == true) {
            this.name = res?.personal?.name;
            this.description = res?.personal?.description;
            this.dob = res?.personal?.dob;
            this.languageList = res?.personal?.spokenLanguages;
            this.nationality = res?.personal?.nationality;
            this.intrestList = res?.personal?.interests;
            this.phone = res?.personal?.phone;
            this.gmail = res?.personal?.gmail;
            this.github = res?.personal?.github;
            this.linkedin = res?.personal?.linkedin;
            this.twitter = res?.personal?.twitter;
            this.facebook = res?.personal?.facebook;
            this.instagram = res?.personal?.instagram;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
