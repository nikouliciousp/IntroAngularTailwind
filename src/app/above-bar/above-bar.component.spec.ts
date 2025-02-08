import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboveBarComponent } from './above-bar.component';

describe('AboveBarComponent', () => {
  let component: AboveBarComponent;
  let fixture: ComponentFixture<AboveBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboveBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboveBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
