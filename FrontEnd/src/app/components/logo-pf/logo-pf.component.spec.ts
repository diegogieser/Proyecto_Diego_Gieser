import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoPFComponent } from './logo-pf.component';

describe('LogoPFComponent', () => {
  let component: LogoPFComponent;
  let fixture: ComponentFixture<LogoPFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoPFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoPFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
