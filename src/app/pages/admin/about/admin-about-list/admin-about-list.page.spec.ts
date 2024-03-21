import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminAboutListPage } from './admin-about-list.page';

describe('AdminAboutListPage', () => {
  let component: AdminAboutListPage;
  let fixture: ComponentFixture<AdminAboutListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminAboutListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
