import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';
import { LowVelocityComponent } from './lowvelocity.component';

describe('LowVelocityComponent', () => {
  let component: LowVelocityComponent;
  let fixture: ComponentFixture<LowVelocityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
        imports: [
          BrowserAnimationsModule,
          FlexLayoutModule,
          MaterialModule,
          SharedModule,
          HttpClientTestingModule
        ],
        declarations: [LowVelocityComponent],
        providers: []
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowVelocityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
