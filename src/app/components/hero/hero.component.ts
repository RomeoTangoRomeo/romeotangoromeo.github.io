import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="hero" class="hero">
      <div class="container hero-grid">
        <div class="intro rise">
          <span class="eyebrow">Welcome to my garden</span>
          <h1>
            Hello, I&rsquo;m <span class="name">Robert Rios</span> &mdash; and this is
            where I let my ideas grow.
          </h1>
          <p class="lede">
            I&rsquo;m Robert—a software developer who enjoys tending to more than just code. When I&rsquo;m not building or learning something technical, you&rsquo;ll usually find me working in the garden, following the markets, unwinding with a videogame, or in the backyard playing with my kids. I like understanding how things work, improving them a little at a time, and staying curious about whatever catches my attention next.
          </p>

          <div class="actions">
            <a class="btn primary" href="#growing">See what&rsquo;s growing</a>
            <a class="btn ghost" href="#about">More about me</a>
          </div>

          <ul class="seed-tags" aria-label="A few things I like">
            @for (l of likes(); track l) {
              <li id="like">{{ l }}</li>
            }
          </ul>
        </div>

        <figure class="art rise">
          <img
            src="assets/hero-garden.png"
            alt="Watercolor illustration of a cottage garden with a stone cottage, climbing roses and terracotta pots"
            width="720"
            height="720"
            loading="eager"
            decoding="async"
          />
          <figcaption>Somewhere I&rsquo;d rather be.</figcaption>
        </figure>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        padding-block: clamp(40px, 7vw, 88px);
        position: relative;
      }
      .hero-grid {
        display: grid;
        grid-template-columns: 1.05fr 0.95fr;
        gap: clamp(28px, 5vw, 64px);
        align-items: center;
      }
      h1 {
        font-size: clamp(2.1rem, 5vw, 3.5rem);
        margin-top: 18px;
        letter-spacing: -0.01em;
      }
      .name {
        color: var(--terracotta-deep);
        font-style: italic;
      }
      .lede {
        margin-top: 20px;
        font-size: 1.12rem;
        color: var(--soil-soft);
        max-width: 46ch;
      }
      .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 14px;
        margin-top: 28px;
      }
      .btn {
        display: inline-flex;
        align-items: center;
        border-radius: 999px;
        padding: 12px 22px;
        font-weight: 700;
        font-size: 0.98rem;
      }
      .btn:hover {
        text-decoration: none;
      }
      .btn.primary {
        background: var(--terracotta);
        color: var(--parchment);
        box-shadow: 0 12px 24px -14px rgba(190, 91, 62, 0.95);
      }
      .btn.primary:hover {
        background: var(--terracotta-deep);
      }
      .btn.ghost {
        color: var(--soil);
        border: 1.5px solid var(--soil);
      }
      .btn.ghost:hover {
        background: var(--soil);
        color: var(--parchment);
      }
      .seed-tags {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        padding: 0;
        margin: 32px 0 0;
      }
      .seed-tags li {
        font-family: var(--font-serif);
        font-style: italic;
        font-size: 0.95rem;
        color: var(--sage-deep);
        background: var(--parchment-deep);
        border: 1px dashed var(--sage);
        padding: 6px 14px;
        border-radius: 999px;
      }
      #like:hover {
        font-weight: bold;
        color: var(--soil);
        border: 3px solid var(--soil);
      }
      .art {
        margin: 0;
      }
      .art img {
        width: 100%;
        height: auto;
        border-radius: 20px;
        border: 1px solid var(--paper-line);
        box-shadow: var(--shadow-soft);
        background: var(--parchment-deep);
      }
      .art figcaption {
        margin-top: 12px;
        text-align: center;
        font-family: var(--font-serif);
        font-style: italic;
        color: var(--soil-soft);
      }
      @media (max-width: 860px) {
        .hero-grid {
          grid-template-columns: 1fr;
        }
        .art {
          order: -1;
          max-width: 460px;
          margin-inline: auto;
        }
      }
    `,
  ],
})
export class HeroComponent {
    likes = signal(['Square foot gardening','System design','Hands on implementation/experimentation','DevSecOps','AWS','Docker','Java','Spring', 'Python','Algorithmic Trading']);
}
