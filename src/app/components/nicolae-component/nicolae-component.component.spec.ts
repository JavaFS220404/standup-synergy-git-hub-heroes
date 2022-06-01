import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NicolaeComponentComponent } from './nicolae-component.component';

describe('NicolaeComponentComponent', () => {
  let component: NicolaeComponentComponent;
  let fixture: ComponentFixture<NicolaeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NicolaeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NicolaeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
