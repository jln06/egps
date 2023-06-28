import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiSuisJeEcritureComponent } from './qui-suis-je-ecriture.component';

describe('QuiSuisJeEcritureComponent', () => {
  let component: QuiSuisJeEcritureComponent;
  let fixture: ComponentFixture<QuiSuisJeEcritureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuiSuisJeEcritureComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuiSuisJeEcritureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
