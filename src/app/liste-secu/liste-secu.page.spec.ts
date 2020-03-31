import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListeSecuPage } from './liste-secu.page';

describe('ListeSecuPage', () => {
  let component: ListeSecuPage;
  let fixture: ComponentFixture<ListeSecuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeSecuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListeSecuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
