import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDirvenFormComponent } from './template-dirven-form.component';

describe('TemplateDirvenFormComponent', () => {
  let component: TemplateDirvenFormComponent;
  let fixture: ComponentFixture<TemplateDirvenFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDirvenFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDirvenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
