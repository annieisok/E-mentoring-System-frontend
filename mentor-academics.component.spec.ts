import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorAcademicsComponent } from './mentor-academics.component';

describe('MentorAcademicsComponent', () => {
  let component: MentorAcademicsComponent;
  let fixture: ComponentFixture<MentorAcademicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorAcademicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorAcademicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
