import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminBlogListPage } from './admin-blog-list.page';

describe('AdminBlogListPage', () => {
  let component: AdminBlogListPage;
  let fixture: ComponentFixture<AdminBlogListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminBlogListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
