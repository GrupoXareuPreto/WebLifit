import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const slides = document.querySelectorAll<HTMLElement>(".slide");
      let index = 0;

      const showSlide = () => {
        slides.forEach((slide, i) => {
          slide.classList.remove("active");
          if (i === index) slide.classList.add("active");
        });
        index = (index + 1) % slides.length;
      };

      setInterval(showSlide, 4000);
    }
  }
}


