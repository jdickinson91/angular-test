import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDualistboxComponent } from './custom-dualistbox.component';

describe('CustomDualistboxComponent', () => {
  let component: CustomDualistboxComponent;
  let fixture: ComponentFixture<CustomDualistboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDualistboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDualistboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
