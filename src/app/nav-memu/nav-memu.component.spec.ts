import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMemuComponent } from './nav-memu.component';

describe('NavMemuComponent', () => {
  let component: NavMemuComponent;
  let fixture: ComponentFixture<NavMemuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavMemuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMemuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
