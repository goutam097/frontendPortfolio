import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminTestimonialListPage } from './admin-testimonial-list.page';

describe('AdminTestimonialListPage', () => {
  let component: AdminTestimonialListPage;
  let fixture: ComponentFixture<AdminTestimonialListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminTestimonialListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
