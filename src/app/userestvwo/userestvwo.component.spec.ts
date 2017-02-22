import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserestvwoComponent } from './userestvwo.component';

describe('UserestvwoComponent', () => {
  let component: UserestvwoComponent;
  let fixture: ComponentFixture<UserestvwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserestvwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserestvwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
