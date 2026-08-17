import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  name: string;
  stage: 'Seedling' | 'Sprouting' | 'Blooming';
  blurb: string;
  link?: string;
}

@Component({
  selector: 'app-growing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="growing" class="growing">
      <div class="container">
        <div class="grid">
          <aside class="aside">
            <span class="eyebrow">Currently growing</span>
            <h2>What&rsquo;s in the beds right now.</h2>
            <p>
              Working on extending my knowledge of the AWS ecosystem and proving that I know it by getting my CLF02 certification.
            </p>
            <img
              class="pot"
              src="assets/potted-plant.png"
              alt="Watercolor illustration of a leafy plant in a terracotta pot on a windowsill"
              width="480"
              height="480"
              loading="lazy"
              decoding="async"
            />
          </aside>

          <ul class="beds">
            <li class="bed" *ngFor="let p of projects">
              <div class="bed-top">
                <span class="stage" [attr.data-stage]="p.stage">{{ p.stage }}</span>
              </div>
              <h3>{{ p.name }}</h3>
              <p>{{ p.blurb }}</p>
              <a *ngIf="p.link" [href]="p.link" class="bed-link">
                Have a look
                <span aria-hidden="true">&rarr;</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .growing {
        padding-block: clamp(48px, 7vw, 96px);
        background: linear-gradient(180deg, transparent, rgba(110, 123, 82, 0.06));
        border-block: 1px solid var(--paper-line);
      }
      .grid {
        display: grid;
        grid-template-columns: 0.85fr 1.15fr;
        gap: clamp(28px, 5vw, 60px);
        align-items: start;
      }
      .aside h2 {
        font-size: clamp(1.7rem, 3.2vw, 2.4rem);
        margin-top: 16px;
      }
      .aside p {
        color: var(--soil-soft);
        margin-top: 14px;
      }
      .pot {
        width: 100%;
        max-width: 320px;
        height: auto;
        margin-top: 26px;
        border-radius: 18px;
      }
      .beds {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 18px;
      }
      .bed {
        background: var(--parchment);
        border: 1px solid var(--paper-line);
        border-left: 5px solid var(--sage);
        border-radius: var(--radius);
        padding: 22px 24px;
        transition: transform 0.2s ease;
      }
      .bed:hover {
        transform: translateX(4px);
      }
      .bed-top {
        display: flex;
        justify-content: flex-end;
      }
      .stage {
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        padding: 4px 12px;
        border-radius: 999px;
        color: var(--parchment);
      }
      .stage[data-stage='Seedling'] {
        background: var(--sage-deep);
      }
      .stage[data-stage='Sprouting'] {
        background: var(--sage);
      }
      .stage[data-stage='Blooming'] {
        background: var(--terracotta);
      }
      .bed h3 {
        font-size: 1.35rem;
        margin-top: 6px;
      }
      .bed p {
        color: var(--soil-soft);
        margin: 10px 0 0;
      }
      .bed-link {
        display: inline-flex;
        gap: 6px;
        margin-top: 14px;
        font-weight: 700;
        color: var(--terracotta-deep);
      }
      @media (max-width: 860px) {
        .grid {
          grid-template-columns: 1fr;
        }
        .pot {
          display: none;
        }
      }
    `,
  ],
})
export class GrowingComponent {
  // Stuff I'm workin on goes here
  projects: Project[] = [
    {
      name: 'My Github Page',
      stage: 'Blooming',
      blurb:
        "Creating my very first Angular-based Github Page to further my understanding of how I can use Angular components, interpolation, databinding, and structural directives to make a single page application.",
      link: 'https://github.com/RomeoTangoRomeo/RomeoTangoRomeo.github.io',
    },
    {
      name: 'Algorithmic Trading--Momentum/Trend',
      stage: 'Blooming',
      blurb:
        "Working with python, pandas,yfinance, numpy, and schwabdev to explore and test algorithmic trading and factor-based investing. Implemented 2 long-only trend/momentum-based strategy (one longer term, another shorter term) along with back-test. I am brave enough to forward-walking them LIVE with my own money. Repos on this are going to remain private/trade secret as I don't want to be responsible for potentially blowing up someone else's portfolio.",
    },
    {
      name: 'In my Beds',
      stage: 'Blooming',
      blurb:
        "Nightshades: Jetstar, Cherry, Supersteak, Jalapeno, Habanero, Cali Wonder, Black Beauty. Cucurbits: Hale's Best Cataloupe, Spacemaster Cukes, Sugar Baby watermelon, Black Diamond, Casper White pumpkin. Legumes: sugar snap peas, Contender Bush Bean. If you know how to get rid of squash bugs my cucurbits would greatly appreciate the help.",
      link:  './assets/plots.png'
    },
      
    {
      name: 'Learning the Angular Framework',
      stage: 'Sprouting',
      blurb:
        "Course for learning and hands-on application of Angular",
      link: 'https://www.udemy.com/course/angular-course/?src=sac&kw=Angular+Deep+Dive&couponCode=CP260817G1'
    },
    {
      name: 'AWS Certification - CLF02',
      stage: 'Sprouting',
      blurb:
        "Furthering my understanding of the AWS ecosystem and prepping to take CLF-C02 test.",
      link: 'https://www.youtube.com/watch?v=7HKot-brXFE'
    },
    {
      name: 'Algorithmic Trading--Mean-Reversion/Trend',
      stage: 'Seedling',
      blurb:
        "Kicking around ideas on how I can potentially expand beyond a strictly momentum-based strat to see if I can capture longer term trends to dampen portfolio volatity.",
    },
  ];
}
