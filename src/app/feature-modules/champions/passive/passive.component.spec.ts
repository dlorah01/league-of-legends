import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassiveComponent } from './passive.component';

describe('PassiveComponent', () => {
  let component: PassiveComponent;
  let fixture: ComponentFixture<PassiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
