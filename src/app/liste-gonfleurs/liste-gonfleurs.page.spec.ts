import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListeGonfleursPage } from './liste-gonfleurs.page';

describe('ListeGonfleursPage', () => {
  let component: ListeGonfleursPage;
  let fixture: ComponentFixture<ListeGonfleursPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeGonfleursPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListeGonfleursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
