import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminServiceListPage } from './admin-service-list.page';

describe('AdminServiceListPage', () => {
  let component: AdminServiceListPage;
  let fixture: ComponentFixture<AdminServiceListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminServiceListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
