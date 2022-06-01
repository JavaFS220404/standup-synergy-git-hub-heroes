import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaulComponentComponent } from './paul-component.component';

describe('PaulComponentComponent', () => {
  let component: PaulComponentComponent;
  let fixture: ComponentFixture<PaulComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaulComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaulComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
