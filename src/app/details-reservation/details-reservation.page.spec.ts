import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsReservationPage } from './details-reservation.page';

describe('DetailsReservationPage', () => {
  let component: DetailsReservationPage;
  let fixture: ComponentFixture<DetailsReservationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsReservationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsReservationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
