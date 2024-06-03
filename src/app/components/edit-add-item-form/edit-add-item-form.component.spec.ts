import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddItemFormComponent } from './edit-add-item-form.component';

describe('EditAddItemFormComponent', () => {
  let component: EditAddItemFormComponent;
  let fixture: ComponentFixture<EditAddItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAddItemFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditAddItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
