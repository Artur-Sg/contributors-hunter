import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingIndicatorServiceStub } from '../../../../tests/stubs/loading-indicator-service';
import { LoadingIndicatorComponent } from './loading-indicator.component';
import { LoadingIndicatorService } from './services/loading-indicator.service';

describe('LoadingIndicatorComponent', () => {
  let component: LoadingIndicatorComponent;
  let fixture: ComponentFixture<LoadingIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingIndicatorComponent],
      providers: [{ provide: LoadingIndicatorService, useClass: LoadingIndicatorServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
