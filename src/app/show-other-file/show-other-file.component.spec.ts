import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOtherFileComponent } from './show-other-file.component';

describe('ShowOtherFileComponent', () => {
  let component: ShowOtherFileComponent;
  let fixture: ComponentFixture<ShowOtherFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOtherFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOtherFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
