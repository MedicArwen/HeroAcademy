import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOrganisationComponent } from './show-organisation.component';

describe('ShowOrganisationComponent', () => {
  let component: ShowOrganisationComponent;
  let fixture: ComponentFixture<ShowOrganisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOrganisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOrganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
