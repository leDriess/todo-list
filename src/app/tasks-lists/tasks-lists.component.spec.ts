import { DragDropModule } from '@angular/cdk/drag-drop';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TasksListsComponent } from './tasks-lists.component';

describe('TasksListsComponent', () => {
  let component: TasksListsComponent;
  let fixture: ComponentFixture<TasksListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksListsComponent ],
      imports: [
        NoopAnimationsModule,
        DragDropModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
