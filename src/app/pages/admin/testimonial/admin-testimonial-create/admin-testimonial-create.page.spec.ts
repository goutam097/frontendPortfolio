import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminTestimonialCreatePage } from './admin-testimonial-create.page';

describe('AdminTestimonialCreatePage', () => {
  let component: AdminTestimonialCreatePage;
  let fixture: ComponentFixture<AdminTestimonialCreatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminTestimonialCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
