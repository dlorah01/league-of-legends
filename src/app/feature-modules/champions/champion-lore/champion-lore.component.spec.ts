import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionLoreComponent } from './champion-lore.component';

describe('ChampionLoreComponent', () => {
  let component: ChampionLoreComponent;
  let fixture: ComponentFixture<ChampionLoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionLoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionLoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
