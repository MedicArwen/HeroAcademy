import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailHeroComponent } from './show-detail-hero.component';

describe('ShowDetailHeroComponent', () => {
  let component: ShowDetailHeroComponent;
  let fixture: ComponentFixture<ShowDetailHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDetailHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
