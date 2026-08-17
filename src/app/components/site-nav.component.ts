import { Component, HostListener, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-site-nav',
  standalone: true,
  template: `
    <header class="nav">
      <div class="container nav-inner">
        <a class="brand" href="#main" aria-label="Back to top">
          <span class="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="26" height="26">
              <path d="M16 28V14" stroke="#4f5a3a" stroke-width="2.4" stroke-linecap="round" />
              <path d="M16 19c-4 0-6-2.5-6-6 3.6 0 6 1.8 6 6Z" fill="#6e7b52" />
              <path d="M16 16c0-4 2-6.5 6-6.5 0 3.8-2.2 6.5-6 6.5Z" fill="#be5b3e" />
            </svg>
          </span>          
          <span class="brand-text">Robert Rios</span>
        </a>

        <nav class="links" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#growing">Currently Growing</a>
          <a href="#journal">Garden Notes</a>

          <button type="button" class="resume-link" (click)="openResume()">
            Resume
          </button>

          <a class="cta" href="#contact">Say Hello</a>
        </nav>
      </div>
    </header>
<!-- resume modal-->
    <div
      class="resume-modal"
      [class.open]="resumeOpen()"
      [attr.aria-hidden]="!resumeOpen()"
      (click)="closeResume()"
    >
      <div
        class="resume-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Resume preview"
        (click)="$event.stopPropagation()"
      >
        <button type="button" class="close-btn" (click)="closeResume()" aria-label="Close resume">
          ×
        </button>

        <iframe [src]="safeUrl" title="Resume PDF"></iframe>

        <p class="fallback">
          If the preview does not load,
          <a [href]="safeUrl" target="_blank" rel="noopener">open the resume in a new tab</a>.
        </p>
      </div>
    </div>
  `,
  styles: [`
    .nav {
      position: sticky;
      top: 0;
      z-index: 50;
      backdrop-filter: blur(8px);
      background: rgba(244, 236, 216, 0.82);
      border-bottom: 1px solid var(--paper-line);
    }
    .nav-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding-block: 14px;
    }
    .brand {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      color: var(--soil);
      font-family: var(--font-serif);
      font-weight: 600;
      font-size: 1.15rem;
    }
    .brand:hover {
      text-decoration: none;
    }
    .brand-mark {
      display: inline-grid;
      place-items: center;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: var(--parchment-deep);
      border: 1px solid var(--paper-line);
    }
    .links {
      display: flex;
      align-items: center;
      gap: 22px;
      font-weight: 600;
      font-size: 0.95rem;
    }
    .links a {
      color: var(--soil-soft);
    }
    .links a:hover {
      color: var(--soil);
      text-decoration: none;
    }
    .links .cta {
      color: var(--parchment);
      background: var(--terracotta);
      padding: 8px 16px;
      border-radius: 999px;
      box-shadow: 0 8px 18px -10px rgba(190, 91, 62, 0.9);
    }
    .links .cta:hover {
      background: var(--terracotta-deep);
    }
    .resume-link {
      border: 0;
      background: transparent;
      color: var(--soil-soft);
      font: inherit;
      font-weight: 600;
      cursor: pointer;
      padding: 0;
    }
    .resume-modal {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.45);
      display: none;
      z-index: 1000;
      padding: 20px;
    }
    .resume-modal.open {
      display: grid;
      place-items: center;
    }
    .resume-dialog {
      width: min(960px, 96vw);
      height: min(85vh, 900px);
      background: #fff;
      border-radius: 12px;
      position: relative;
      overflow: hidden;
      box-shadow: 0 20px 45px rgba(0,0,0,0.28);
    }
    .resume-dialog iframe {
      width: 100%;
      height: calc(100% - 42px);
      border: 0;
    }
    .close-btn {
      position: absolute;
      top: 8px;
      right: 10px;
      border: 0;
      background: transparent;
      font-size: 1.6rem;
      cursor: pointer;
      line-height: 1;
    }
    .fallback {
      margin: 8px 12px 12px;
      font-size: 0.9rem;
    }
  `],
})
export class SiteNavComponent {
  // Space-safe URL for Angular assets
  resumeUrl = 'assets/Rios-Robert-Java-Dev.pdf';

  safeUrl: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.resumeUrl);
  }
  resumeOpen = signal(false);
  
  openResume() {
    this.resumeOpen.set(true);
  }

  closeResume() {
    this.resumeOpen.set(false);
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: Event): void {
    if (!this.resumeOpen()) {
      return;
    }

    if (event instanceof KeyboardEvent) {
      event.preventDefault();
    }
    this.closeResume();
  }
}
