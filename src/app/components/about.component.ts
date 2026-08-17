import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Interest {
  title: string;
  body: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about">
      <div class="container">
        <span class="eyebrow">A little about me</span>
        <div class="head">          
          <h2>I like tending to things &mdash; gardens, ideas, and everything in between.</h2>
          <p>
          I'm a software developer based out of Kentucky with 7+ years of experience designing, maintaining and supporting enterprise web applications. I've got extensive experience with Java, Spring MVC, JSP, SQL, Git, Maven, and automated testing. I enjoy learning how things are done and exploring to see whether or not I can improve upon them through hands-on implementatation. The best way to learn something is to get your hands a little dirty!
          </p>
        </div>

        <ul class="plots">
          <li class="plot" *ngFor="let item of interests">
            <span class="sprout" aria-hidden="true"></span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.body }}</p>
          </li>
        </ul>
      </div>
    </section>
  `,
  styles: [
    `
      .about {
        padding-block: clamp(48px, 7vw, 96px);
      }
      .head {
        display: grid;
        grid-template-columns: 1.1fr 1fr;
        gap: clamp(20px, 4vw, 56px);
        align-items: end;
        margin-top: 16px;
      }
      .head h2 {
        font-size: clamp(1.7rem, 3.4vw, 2.5rem);
      }
      .head p {
        color: var(--soil-soft);
        font-size: 1.05rem;
        margin: 0;
      }
      .plots {
        list-style: none;
        padding: 0;
        margin: clamp(32px, 5vw, 56px) 0 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
      }
      .plot {
        position: relative;
        background: var(--parchment-deep);
        border: 1px solid var(--paper-line);
        border-radius: var(--radius);
        padding: 26px 24px 24px;
        box-shadow: 0 14px 30px -26px rgba(58, 46, 35, 0.7);
        transition: transform 0.25s ease, box-shadow 0.25s ease;
      }
      .plot:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-soft);
      }
      .sprout {
        display: block;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        margin-bottom: 16px;
        background:
          radial-gradient(circle at 50% 60%, var(--sage) 0 45%, transparent 46%),
          var(--parchment);
        border: 1px solid var(--sage);
        position: relative;
      }
      .sprout::after {
        content: '';
        position: absolute;
        inset: 0;
        margin: auto;
        width: 2px;
        height: 14px;
        background: var(--sage-deep);
        border-radius: 2px;
      }
      .plot h3 {
        font-size: 1.2rem;
      }
      .plot p {
        margin: 8px 0 0;
        color: var(--soil-soft);
        font-size: 0.98rem;
      }
      @media (max-width: 860px) {
        .head {
          grid-template-columns: 1fr;
          align-items: start;
        }
        .plots {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class AboutComponent {  
  interests: Interest[] = [
    {
      title: 'What I nurture',
      body: 'I love to garden, read books, and explore new technologies.',
    },
    {
      title: 'How I work',
      body: 'I am a tinkerer and experminter. I get my hands dirty trying new things--oftentimes breaking something in the process. Then I dig into why it broke and use that to further my understanding on a given subject.',
    },
    {
      title: 'Off the clock',
      body: 'I study the mystical arts of investing / trading, home gardening (of course), gaming (not very well), and doing my best to understand how systems work. Also a strong believer in the concept of "Movement is Medicine" and do my best to consistently get in HIIT workouts when I can.',
    },
  ];
}
