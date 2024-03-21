import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminAboutCreatePage } from './admin-about-create.page';

describe('AdminAboutCreatePage', () => {
  let component: AdminAboutCreatePage;
  let fixture: ComponentFixture<AdminAboutCreatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminAboutCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
