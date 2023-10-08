import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNewsComponent } from './top-news.component';

describe('TopNewsComponent', () => {
  let component: TopNewsComponent;
  let fixture: ComponentFixture<TopNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopNewsComponent]
    });
    fixture = TestBed.createComponent(TopNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
