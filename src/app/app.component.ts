import { Component } from '@angular/core';
import { SiteNavComponent } from './components/site-nav.component';
import { HeroComponent } from './components/hero.component';
import { AboutComponent } from './components/about.component';
import { GrowingComponent } from './components/growing.component';
import { JournalComponent } from './components/journal.component';
import { SiteFooterComponent } from './components/site-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SiteNavComponent,
    HeroComponent,
    AboutComponent,
    GrowingComponent,
    JournalComponent,
    SiteFooterComponent,
  ],
  template: `
    <a class="skip-link" href="#main">Skip to content</a>
    <app-site-nav />
    <main id="main">
      <app-hero />
      <app-about />
      <app-growing />
      <app-journal />
    </main>
    <app-site-footer />
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .skip-link {
        position: absolute;
        left: -9999px;
        top: 0;
        background: var(--soil);
        color: var(--parchment);
        padding: 10px 16px;
        border-radius: 0 0 10px 0;
        z-index: 100;
      }
      .skip-link:focus {
        left: 0;
      }
    `,
  ],
})
export class AppComponent {}
