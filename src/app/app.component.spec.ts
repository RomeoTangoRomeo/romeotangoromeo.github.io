import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should render site navigation`, () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('app-site-nav')).toBeTruthy();
  });

  it(`should render site content`, () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('app-about')).toBeTruthy();
    expect(element.querySelector('app-growing')).toBeTruthy();
    expect(element.querySelector('app-hero')).toBeTruthy();
    expect(element.querySelector('app-journal')).toBeTruthy();
  });

  it(`should render site footer`, () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('app-site-footer')).toBeTruthy();
  });

});
