import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListeReservationPage } from './liste-reservation.page';

describe('ListeReservationPage', () => {
  let component: ListeReservationPage;
  let fixture: ComponentFixture<ListeReservationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeReservationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListeReservationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
