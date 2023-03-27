import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionAbilitiesComponent } from './champion-abilities.component';

describe('ChampionAbilitiesComponent', () => {
  let component: ChampionAbilitiesComponent;
  let fixture: ComponentFixture<ChampionAbilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionAbilitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
