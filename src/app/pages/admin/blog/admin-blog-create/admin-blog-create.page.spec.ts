import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminBlogCreatePage } from './admin-blog-create.page';

describe('AdminBlogCreatePage', () => {
  let component: AdminBlogCreatePage;
  let fixture: ComponentFixture<AdminBlogCreatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminBlogCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
