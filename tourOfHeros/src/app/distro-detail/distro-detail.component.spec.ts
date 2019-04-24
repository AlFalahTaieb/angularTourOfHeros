import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistroDetailComponent } from './distro-detail.component';

describe('DistroDetailComponent', () => {
  let component: DistroDetailComponent;
  let fixture: ComponentFixture<DistroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
