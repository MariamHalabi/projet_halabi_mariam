import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantPanierComponent } from './composant-panier.component';

describe('ComposantPanierComponent', () => {
  let component: ComposantPanierComponent;
  let fixture: ComponentFixture<ComposantPanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantPanierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
