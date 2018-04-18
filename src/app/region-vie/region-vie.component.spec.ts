import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionVieComponent } from './region-vie.component';

describe('RegionVieComponent', () => {
  let component: RegionVieComponent;
  let fixture: ComponentFixture<RegionVieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionVieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionVieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
