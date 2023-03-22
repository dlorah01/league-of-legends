import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionBasicComponent } from './champion-basic.component';

describe('ChampionBasicComponent', () => {
  let component: ChampionBasicComponent;
  let fixture: ComponentFixture<ChampionBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
