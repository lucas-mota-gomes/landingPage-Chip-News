import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YtVideosComponent } from './yt-videos.component';

describe('YtVideosComponent', () => {
  let component: YtVideosComponent;
  let fixture: ComponentFixture<YtVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YtVideosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YtVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
