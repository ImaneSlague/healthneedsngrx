import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendrequestComponent } from './sendrequest.component';

describe('SendrequestComponent', () => {
  let component: SendrequestComponent;
  let fixture: ComponentFixture<SendrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
