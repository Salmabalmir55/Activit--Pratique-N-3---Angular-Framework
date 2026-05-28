import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'med@gmail.com' email`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // On change 'title' par 'Email' et on met la bonne valeur
    expect(app.Email).toEqual('med@gmail.com');
  });

  it('should render email', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // On vérifie si le HTML contient bien l'email (si vous l'avez affiché dans votre HTML)
    expect(compiled.querySelector('p')?.textContent).toContain('med@gmail.com');
  });
});
