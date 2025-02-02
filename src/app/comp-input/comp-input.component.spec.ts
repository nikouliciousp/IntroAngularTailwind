import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompInputComponent } from './comp-input.component';

describe('CompInputComponent', () => {
  let component: CompInputComponent;
  let fixture: ComponentFixture<CompInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
