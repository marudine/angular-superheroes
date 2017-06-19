import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; //Stack Overflow
import { DebugElement }    from '@angular/core';
import { By }              from '@angular/platform-browser';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

    let comp:    AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let dbug:      DebugElement; //access to the DOM
    let elem:      HTMLElement;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ RouterTestingModule ],//Stack Overflow
        declarations: [ AppComponent ] // always declare the test component
      });

      fixture = TestBed.createComponent(AppComponent);

      comp = fixture.componentInstance; // AppComponent test instance

      // query for the title <h1> by CSS element selector
      dbug = fixture.debugElement.query(By.css('nav'));
      elem = dbug.nativeElement;
    });


  it('should create the app', async(() => {
    expect(AppComponent).toBeTruthy();
  }));

  it('should render text of nav tag', async(() => {
    fixture.detectChanges();
    expect(elem.textContent).toContain('Dashboard');
  }));

  it('should render text of nav tag', async(() => {
    fixture.detectChanges();
    expect(elem.textContent).toContain('Heroes');
  }));

});
