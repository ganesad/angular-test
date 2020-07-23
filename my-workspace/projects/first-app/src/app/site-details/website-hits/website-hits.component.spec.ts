import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteHitsComponent } from './website-hits.component';

describe('WebsiteHitsComponent', () => {
  let component: WebsiteHitsComponent;
  let fixture: ComponentFixture<WebsiteHitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteHitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteHitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
