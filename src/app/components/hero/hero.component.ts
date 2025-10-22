import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  fullName: string = 'Abdullah Developer';
  displayedName: string = '';
  typingSpeed: number = 200; // milliseconds per letter

  ngOnInit(): void {
    this.typeText();
  }

  typeText() {
    let i = 0;
    const typingInterval = setInterval(() => {
      this.displayedName += this.fullName[i];
      i++;
      if (i === this.fullName.length) {
        clearInterval(typingInterval);
      }
    }, this.typingSpeed);
  }
}
