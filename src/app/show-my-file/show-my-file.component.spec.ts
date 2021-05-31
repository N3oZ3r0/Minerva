import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMyFileComponent } from './show-my-file.component';

describe('ShowMyFileComponent', () => {
  let component: ShowMyFileComponent;
  let fixture: ComponentFixture<ShowMyFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMyFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMyFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
