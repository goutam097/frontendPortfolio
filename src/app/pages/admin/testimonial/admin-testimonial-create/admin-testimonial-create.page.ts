import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data/data.service';

@Component({
  selector: 'app-admin-testimonial-create',
  templateUrl: './admin-testimonial-create.page.html',
  styleUrls: ['./admin-testimonial-create.page.scss'],
})
export class AdminTestimonialCreatePage implements OnInit {
  type: any;
  testimonialId: any;
  image: any;
  title: any;
  name: any;
  rating: any;
  description: any;
 

  constructor(
    private dataServ: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.type = this.activatedRoute.snapshot.paramMap.get('type');
    console.log(this.type);
    this.testimonialId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.type == 'edit' || this.type == 'view') {
      this.getTestimonialDetailsApiCall();
    }
  }

  async submitTestimonial(form: NgForm) {
    console.log(form.value);
    if (form.invalid) {
      return;
    }
    let jsonData = {
      title: this.title,
      name: this.name,
      rating: this.rating,
      description: this.description,
      image: this.image
    };
    if(this.testimonialId){
      await this.dataServ
      .putMethod(jsonData, `testimonial/update/${this.testimonialId}`)
      .then(async (data) => {
        const res = JSON.parse(JSON.stringify(data));
        console.log(res);
        if (res) {
          this.router.navigateByUrl('/admin-testimonial-list');  
        }
      });
    }else{
      await this.dataServ
      .postMethod(jsonData, 'create/testimonial')
      .then(async (data) => {
        const res = JSON.parse(JSON.stringify(data));
        console.log(res);
        if (res) {
          this.router.navigateByUrl('/admin-testimonial-list');  
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
    console.log(this.image)
    // You can perform additional actions with the image if needed
  }

  clearImage(){
    this.image = null;
  }

  async getTestimonialDetailsApiCall() {
    await this.dataServ.getMethod(`testimonial/details/${this.testimonialId}`).then(
      async (data) => {
        const res = JSON.parse(JSON.stringify(data));
        if (res?.success == true) {
          this.title = res?.testimonial?.title;
          this.name = res?.testimonial?.name;
          this.rating = res?.testimonial?.rating;
          this.description = res?.testimonial?.description;
          this.image = res?.testimonial?.image
        } 
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
