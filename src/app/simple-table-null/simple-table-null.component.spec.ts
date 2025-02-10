import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTableNullComponent } from './simple-table-null.component';

describe('SimpleTableNullComponent', () => {
  let component: SimpleTableNullComponent;
  let fixture: ComponentFixture<SimpleTableNullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleTableNullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleTableNullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
