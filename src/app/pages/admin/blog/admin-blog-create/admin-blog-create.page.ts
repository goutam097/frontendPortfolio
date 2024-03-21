import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data/data.service';

@Component({
  selector: 'app-admin-blog-create',
  templateUrl: './admin-blog-create.page.html',
  styleUrls: ['./admin-blog-create.page.scss'],
})
export class AdminBlogCreatePage implements OnInit {
  blogTitle: any;
  description: any;
  image: any;
  type: any;
  blogId: any;

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
    this.blogId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.type == 'edit' || this.type == 'view') {
      this.getDetailsDetailsApiCall();
    }
  }

  async submitBlog(form: NgForm) {
    console.log(form.value);
    if (form.invalid) {
      return;
    }
    let jsonData = {
      title: this.blogTitle,
      description: this.description,
      image: this.image
    };
    if(this.blogId){
      await this.dataServ
      .putMethod(jsonData, `blogs/update/${this.blogId}`)
      .then(async (data) => {
        const res = JSON.parse(JSON.stringify(data));
        console.log(res);
        if (res) {
          this.router.navigateByUrl('/admin-blog-list');  
        }
      });
    }else{
      await this.dataServ
      .postMethod(jsonData, 'create/blogs')
      .then(async (data) => {
        const res = JSON.parse(JSON.stringify(data));
        console.log(res);
        if (res) {
          this.router.navigateByUrl('/admin-blog-list');  
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

  async getDetailsDetailsApiCall() {
    await this.dataServ.getMethod(`blogs/details/${this.blogId}`).then(
      async (data) => {
        const res = JSON.parse(JSON.stringify(data));
        if (res?.success == true) {
          this.blogTitle = res?.blog?.title;
          this.description = res?.blog?.description;
          this.image = res?.blog?.image
        } 
      },
      (err) => {
        console.log(err);
      }
    );
  }
  

 

}
