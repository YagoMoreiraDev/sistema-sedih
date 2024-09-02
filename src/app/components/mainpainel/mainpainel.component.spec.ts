import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpainelComponent } from './mainpainel.component';

describe('MainpainelComponent', () => {
  let component: MainpainelComponent;
  let fixture: ComponentFixture<MainpainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainpainelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainpainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
