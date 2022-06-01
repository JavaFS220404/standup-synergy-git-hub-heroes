import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndresComponentComponent } from './andres-component.component';

describe('AndresComponentComponent', () => {
  let component: AndresComponentComponent;
  let fixture: ComponentFixture<AndresComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndresComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndresComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
