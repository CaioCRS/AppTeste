import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TesteTransicaoPage } from './teste-transicao.page';

describe('TesteTransicaoPage', () => {
  let component: TesteTransicaoPage;
  let fixture: ComponentFixture<TesteTransicaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteTransicaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TesteTransicaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
