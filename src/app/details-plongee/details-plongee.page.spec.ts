import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsPlongeePage } from './details-plongee.page';

describe('DetailsPlongeePage', () => {
  let component: DetailsPlongeePage;
  let fixture: ComponentFixture<DetailsPlongeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPlongeePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsPlongeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
