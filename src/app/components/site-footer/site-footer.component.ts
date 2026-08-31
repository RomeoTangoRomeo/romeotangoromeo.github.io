import { Component } from '@angular/core';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  template: `
    <footer id="contact" class="footer">
      <div class="container footer-inner">
        <div class="say-hello">
          <span class="eyebrow">Say hello</span>        
          <h2>Fancy trading garden notes?</h2>
          <p>
            Reach out anytime via email or connect with me on GitHub or LinkedIn.
          </p>

          <div class="links">            
            <a href="mailto:rtrios006@gmail.com">Email</a>
            <a href="https://github.com/romeotangoromeo" target="_blank" rel="noopener">GitHub</a>
            <a href="https://www.linkedin.com/in/robert-rios/" target="_blank" rel="noopener">LinkedIn</a>
            <a href="#hero">Back to top</a>
          </div>
        </div>

        <p class="colophon">
          <span aria-hidden="true">&#127793;</span>
          Grown with care by Robert Rios. Tended in Angular, planted on GitHub Pages.
        </p>
      </div>
    </footer>
  `,
  styles: [
    `
      .footer {
        background: var(--soil);
        color: var(--parchment);
        padding-block: clamp(48px, 7vw, 88px);
      }
      .footer .eyebrow {
        color: var(--wheat);
      }
      .footer .eyebrow::before {
        background: var(--wheat);
      }
      .say-hello h2 {
        color: var(--parchment);
        font-size: clamp(1.9rem, 4vw, 3rem);
        margin-top: 14px;
      }
      .say-hello p {
        color: rgba(244, 236, 216, 0.8);
        max-width: 52ch;
        margin-top: 14px;
        font-size: 1.08rem;
      }
      .links {
        display: flex;
        flex-wrap: wrap;
        gap: 14px;
        margin-top: 26px;
      }
      .links a {
        color: var(--soil);
        background: var(--parchment);
        padding: 11px 22px;
        border-radius: 999px;
        font-weight: 700;
      }
      .links a:hover {
        background: var(--wheat);
        text-decoration: none;
      }
      .colophon {
        margin: clamp(36px, 6vw, 60px) 0 0;
        padding-top: 22px;
        border-top: 1px solid rgba(244, 236, 216, 0.18);
        color: rgba(244, 236, 216, 0.7);
        font-size: 0.92rem;
        display: flex;
        align-items: center;
        gap: 8px;
      }
    `,
  ],
})
export class SiteFooterComponent {}
