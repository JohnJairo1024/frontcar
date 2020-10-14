import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearmecanicoComponent } from './crearmecanico.component';

describe('CrearmecanicoComponent', () => {
  let component: CrearmecanicoComponent;
  let fixture: ComponentFixture<CrearmecanicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearmecanicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearmecanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
