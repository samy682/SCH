import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListePlongeesPage } from './liste-plongees.page';

describe('ListePlongeesPage', () => {
  let component: ListePlongeesPage;
  let fixture: ComponentFixture<ListePlongeesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePlongeesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListePlongeesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
