import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagraficaDistrettoComponent } from './anagrafica-distretto.component';

describe('AnagraficaDistrettoComponent', () => {
  let component: AnagraficaDistrettoComponent;
  let fixture: ComponentFixture<AnagraficaDistrettoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnagraficaDistrettoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnagraficaDistrettoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
