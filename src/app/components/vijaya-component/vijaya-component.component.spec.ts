import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VijayaComponentComponent } from './vijaya-component.component';

describe('VijayaComponentComponent', () => {
  let component: VijayaComponentComponent;
  let fixture: ComponentFixture<VijayaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VijayaComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VijayaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
