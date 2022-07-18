import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditTopsComponent } from './reddit-tops.component';

describe('RedditTopsComponent', () => {
  let component: RedditTopsComponent;
  let fixture: ComponentFixture<RedditTopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedditTopsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedditTopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
