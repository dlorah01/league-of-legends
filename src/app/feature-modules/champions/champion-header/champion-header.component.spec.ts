import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionHeaderComponent } from './champion-header.component';

describe('ChampionHeaderComponent', () => {
  let component: ChampionHeaderComponent;
  let fixture: ComponentFixture<ChampionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
