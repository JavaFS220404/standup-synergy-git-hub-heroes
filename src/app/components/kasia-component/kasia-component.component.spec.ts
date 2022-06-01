import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KasiaComponentComponent } from './kasia-component.component';

describe('KasiaComponentComponent', () => {
  let component: KasiaComponentComponent;
  let fixture: ComponentFixture<KasiaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KasiaComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KasiaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
