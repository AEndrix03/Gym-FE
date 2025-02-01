import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagraficaMuscoloComponent } from './anagrafica-muscolo.component';

describe('AnagraficaMuscoloComponent', () => {
  let component: AnagraficaMuscoloComponent;
  let fixture: ComponentFixture<AnagraficaMuscoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnagraficaMuscoloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnagraficaMuscoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
