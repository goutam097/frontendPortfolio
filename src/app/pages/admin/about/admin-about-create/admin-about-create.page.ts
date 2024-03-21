import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/service/alert/alert.service';
import { DataService } from 'src/app/service/data/data.service';

@Component({
  selector: 'app-admin-about-create',
  templateUrl: './admin-about-create.page.html',
  styleUrls: ['./admin-about-create.page.scss'],
})
export class AdminAboutCreatePage implements OnInit {
  image: any;
  type: any;
  aboutId: any;

  experienceTitle: any;
  experienceDescription: any;
  experienceList: any = [];

  skillTitle: any;
  skillDescription: any;
  skillList: any = [];
  allowedTypes: any = ['image/jpeg','image/png','image/jpg','image/webp'];
  maxSize: number = 2100000
  aboutimage: any;

  constructor(
    private dataServ: DataService,
    private activatedRoute: ActivatedRoute,
    private alertServe: AlertService,
    private router: Router
  ) {}

  ngOnInit() {}

  addExperience() {
    const title = this.experienceTitle?.trim();
    const description = this.experienceDescription?.trim();

    if (
      this.experienceList?.some(
        (exp: any) => exp.title == title 
      )
    ) {
      this.alertServe.presentToast('This interest is already added');
      return;
    }

    this.experienceList.push({ title, description });

    this.experienceTitle = null;
    this.experienceDescription = null;

    console.log(this.experienceList);
  }

  removeExperience(index: any) {
    this.experienceList.splice(index, 1);
  }

  addSkill() {
    const title = this.skillTitle?.trim();
    const description = this.skillDescription?.trim();
    const image = this.image;

    if (
      this.skillList?.some(
        (exp: any) => exp.title == title 
      )
    ) {
      this.alertServe.presentToast('This interest is already added');
      return;
    }

    this.skillList.push({ title, description, image });

    this.skillTitle = null;
    this.skillDescription = null;
    this.image = null;

    console.log(this.skillList);
  }

  removeSkill(index: any) {
    this.skillList.splice(index, 1);
  }

  async ionViewWillEnter() {
    this.type = this.activatedRoute.snapshot.paramMap.get('type');
    console.log(this.type);
    this.aboutId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.type == 'edit' || this.type == 'view') {
      this.getAboutDetailsApiCall();
    }
  }

  async submitAbout() {
    let jsonData = {
      skills: this.skillList,
      experience: this.experienceList,
      image: this.aboutimage,
    };
    if (this.aboutId) {
      await this.dataServ
        .putMethod(jsonData, `abouts/update/${this.aboutId}`)
        .then(async (data) => {
          const res = JSON.parse(JSON.stringify(data));
          if (res) {
            this.router.navigateByUrl('/admin-about-list');
          }
        });
    } else {
      await this.dataServ
        .postMethod(jsonData, 'create/about')
        .then(async (data) => {
          const res = JSON.parse(JSON.stringify(data));
          if (res) {
            this.router.navigateByUrl('/admin-about-list');
          }
        });
    }
  }

  yourImage($event: any) {
    const file = $event.files[0];
    if (file) {
      if(this.allowedTypes.includes(file.type) && file.size < this.maxSize){
        const reader = new FileReader();
        reader.onloadend = () => {
          this.image = {
            name: file.name,
            base64Data: reader.result?.toString(),
            size: file.size,
            type: file.name.split('.').pop().toLowerCase(),
          }
        };

        reader.readAsDataURL(file);
      } else {
        console.log('Invalid file type or size exceeded.');
      }
    }
  }

  clearImage() {
    this.image = null;
  }

  yourAboutImage($event: any) {
    const file = $event.files[0];
    if (file) {
      if(this.allowedTypes.includes(file.type) && file.size < this.maxSize){
        const reader = new FileReader();
        reader.onloadend = () => {
          this.aboutimage = {
            name: file.name,
            base64Data: reader.result?.toString(),
            size: file.size,
            type: file.name.split('.').pop().toLowerCase(),
          }
        };

        reader.readAsDataURL(file);
      } else {
        console.log('Invalid file type or size exceeded.');
      }
    }
  }

  clearAboutImage() {
    this.aboutimage = null;
  }

  async getAboutDetailsApiCall() {
    await this.dataServ.getMethod(`abouts/details/${this.aboutId}`).then(
      async (data) => {
        const res = JSON.parse(JSON.stringify(data));
        if (res?.success == true) {
          this.experienceList = res?.about?.experience;
          this.skillList = res?.about?.skills;
          this.aboutimage = res?.about?.image;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
