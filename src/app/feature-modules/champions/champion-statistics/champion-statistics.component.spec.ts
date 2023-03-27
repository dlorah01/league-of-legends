import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionStatisticsComponent } from './champion-statistics.component';

describe('ChampionStatisticsComponent', () => {
  let component: ChampionStatisticsComponent;
  let fixture: ComponentFixture<ChampionStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
