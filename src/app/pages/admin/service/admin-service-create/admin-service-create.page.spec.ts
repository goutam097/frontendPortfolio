import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminServiceCreatePage } from './admin-service-create.page';

describe('AdminServiceCreatePage', () => {
  let component: AdminServiceCreatePage;
  let fixture: ComponentFixture<AdminServiceCreatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminServiceCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
