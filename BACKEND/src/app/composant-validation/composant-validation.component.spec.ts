import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantValidationComponent } from './composant-validation.component';

describe('ComposantValidationComponent', () => {
  let component: ComposantValidationComponent;
  let fixture: ComponentFixture<ComposantValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
