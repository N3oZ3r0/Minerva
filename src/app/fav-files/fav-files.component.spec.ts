import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavFilesComponent } from './fav-files.component';

describe('FavFilesComponent', () => {
  let component: FavFilesComponent;
  let fixture: ComponentFixture<FavFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
