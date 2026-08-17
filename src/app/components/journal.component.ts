import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Note {
  date: string;
  title: string;
  body: string;
}

@Component({
  selector: 'app-journal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="journal" class="journal">
      <div class="container">
        <span class="eyebrow">Garden notes</span>
        <!-- TODO: Update this heading if you'd like -->
        <h2>Little entries from the potting shed.</h2>
        <p class="sub">
          Stuff I've been working on
        </p>
        <ol class="notes">
          <li class="note" *ngFor="let n of notes">
            <time class="date">{{ n.date }}</time>
            <div class="note-body">
              <h3>{{ n.title }}</h3>
              <p>{{ n.body }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  `,
  styles: [
    `
      .journal {
        padding-block: clamp(48px, 7vw, 96px);
      }
      h2 {
        font-size: clamp(1.7rem, 3.2vw, 2.4rem);
        margin-top: 14px;
      }
      .sub {
        color: var(--soil-soft);
        max-width: 58ch;
        margin-top: 12px;
      }
      .notes {
        list-style: none;
        margin: clamp(28px, 4vw, 48px) 0 0;
        padding: 0;
      }
      .note {
        display: grid;
        grid-template-columns: 160px 1fr;
        gap: 24px;
        padding: 24px 0;
        border-top: 1px solid var(--paper-line);
      }
      .note:last-child {
        border-bottom: 1px solid var(--paper-line);
      }
      .date {
        font-family: var(--font-serif);
        font-style: italic;
        color: var(--sage-deep);
        font-size: 1.02rem;
      }
      .note-body h3 {
        font-size: 1.25rem;
      }
      .note-body p {
        margin: 8px 0 0;
        color: var(--soil-soft);
      }
      @media (max-width: 720px) {
        .note {
          grid-template-columns: 1fr;
          gap: 6px;
        }
      }
    `,
  ],
})
export class JournalComponent {
    notes: Note[] = [
    {
      date: 'Early Spring',
      title: 'Bed Preparation',
      body: "Get beds ready for planting by chopping cover crop, adding compost and turning the soil.",
    },
    {
      date: 'Spring',
      title: 'Planting',
      body: "Companion planting and sowing seeds for the upcoming growing season.",
    },
    {
      date: 'Late Summer',
      title: 'Angular',
      body: "Started learning Angular and building components for my very first single page application.",
    },
    {
      date: 'First Frost',
      title: 'Harvest and Compost',
      body: "Gather the final harvest and chop and trench plants into the garden beds for in-place composting.",
    },
    {
      date: 'post-Frost',
      title: 'Winter Preparation',
      body: "Prepare the garden beds for winter by sewing winter cover crops. These will be chopped and dropped in the spring to enrich the soil.",
    },
  ];
}
