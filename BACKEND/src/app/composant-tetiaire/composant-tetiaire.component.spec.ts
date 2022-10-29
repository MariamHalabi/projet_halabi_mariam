import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantTetiaireComponent } from './composant-tetiaire.component';

describe('ComposantTetiaireComponent', () => {
  let component: ComposantTetiaireComponent;
  let fixture: ComponentFixture<ComposantTetiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantTetiaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantTetiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
