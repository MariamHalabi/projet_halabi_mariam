import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantProduitComponent } from './composant-produit.component';

describe('ComposantProduitComponent', () => {
  let component: ComposantProduitComponent;
  let fixture: ComponentFixture<ComposantProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
