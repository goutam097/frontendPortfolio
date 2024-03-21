import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data/data.service';

@Component({
  selector: 'app-admin-service-create',
  templateUrl: './admin-service-create.page.html',
  styleUrls: ['./admin-service-create.page.scss'],
})
export class AdminServiceCreatePage implements OnInit {
  serviceTitle: any;
  description: any;
  image: any;
  type: any;
  serviceId: any;
  servId: any;

  constructor(
    private dataServ: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.type = this.activatedRoute.snapshot.paramMap.get('type');
    console.log(this.type)
    this.serviceId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.type == 'edit' || this.type == 'view') {
      this.getServiceDetailsApiCall();
    }
  }

  async submitService(form: NgForm) {
    if (form.invalid) {
      return;
    }
    let jsonData = {
      title: this.serviceTitle,
      description: this.description,
      image: this.image
    };
    // if(this.serviceId){
    //   Object.assign(jsonData, { id: this.serviceId })
    // }
    if(this.serviceId){
      await this.dataServ
      .putMethod(jsonData, `service/update/${this.serviceId}`)
      .then(async (data) => {
        const res = JSON.parse(JSON.stringify(data));
        if (res?.success == true) {
          this.router.navigateByUrl('/admin-service-list');  
        }
      });
    }else{
      await this.dataServ
      .postMethod(jsonData, 'create/service')
      .then(async (data) => {
        const res = JSON.parse(JSON.stringify(data));
        if (res?.success == true) {
          this.servId = res.service._id;
          this.router.navigateByUrl('/admin-service-list');  
        }
      });
    }
   
  }

  yourImage($event: any) {
    const file = $event.files[0];
  
    if (file) {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
      const maxSize = 2100000;
  
      if (this.isValidFile(file, allowedTypes, maxSize)) {
        this.readFile(file);
      } else {
        console.log('Invalid file type or size exceeded.');
      }
    }
  }
  
  isValidFile(file: any, allowedTypes: string[], maxSize: number): boolean {
    return (
      allowedTypes.includes(file.type) &&
      file.size < maxSize
    );
  }
  
  readFile(file: any) {
    const reader = new FileReader();
  
    reader.onloadend = () => {
      const image = this.createImageObject(file, reader.result?.toString());
      this.setImage(image);
    };
  
    reader.readAsDataURL(file);
  }
  
  createImageObject(file: any, base64Data: string | undefined): any {
    return {
      name: file.name,
      base64Data: base64Data,
      size: file.size,
      type: file.name.split('.').pop().toLowerCase(),
    };
  }
  
  setImage(image: any) {
    this.image = image;
  }

  clearImage(){
    this.image = null;
  }

  async getServiceDetailsApiCall() {
    await this.dataServ.getMethod(`service/details/${this.serviceId}`).then(
      async (data) => {
        const res = JSON.parse(JSON.stringify(data));
        if (res?.success == true) {
          this.serviceTitle = res?.service?.title;
          this.description = res?.service?.description;
          this.image = res?.service?.image
        } 
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
