import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidecHeaderComponent } from './sidec-header.component';

describe('SidecHeaderComponent', () => {
  let component: SidecHeaderComponent;
  let fixture: ComponentFixture<SidecHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidecHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidecHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
