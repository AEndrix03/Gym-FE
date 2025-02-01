import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagraficaEsercizioComponent } from './anagrafica-esercizio.component';

describe('AnagraficaEsercizioComponent', () => {
  let component: AnagraficaEsercizioComponent;
  let fixture: ComponentFixture<AnagraficaEsercizioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnagraficaEsercizioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnagraficaEsercizioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
