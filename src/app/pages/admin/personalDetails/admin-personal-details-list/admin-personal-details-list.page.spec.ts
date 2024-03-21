import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminPersonalDetailsListPage } from './admin-personal-details-list.page';

describe('AdminPersonalDetailsListPage', () => {
  let component: AdminPersonalDetailsListPage;
  let fixture: ComponentFixture<AdminPersonalDetailsListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminPersonalDetailsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
