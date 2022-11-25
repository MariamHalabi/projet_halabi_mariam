import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantFormulaireComponent } from './composant-formulaire.component';

describe('ComposantFormulaireComponent', () => {
  let component: ComposantFormulaireComponent;
  let fixture: ComponentFixture<ComposantFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantFormulaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
