import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjoutPlongeePage } from './ajout-plongee.page';

describe('AjoutPlongeePage', () => {
  let component: AjoutPlongeePage;
  let fixture: ComponentFixture<AjoutPlongeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutPlongeePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjoutPlongeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
