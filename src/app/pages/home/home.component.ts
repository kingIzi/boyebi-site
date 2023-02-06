import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('themeToggleDarkIcon') themeToggleDarkIcon!: ElementRef;
  @ViewChild('themeToggleLightIcon') themeToggleLightIcon!: ElementRef;

  private toggleDarkLightMode() {
    // Change the icons inside the button based on previous settings
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      this.themeToggleLightIcon.nativeElement.classList.remove('hidden');
    } else {
      this.themeToggleDarkIcon.nativeElement.classList.remove('hidden');
    }
  }

  ngAfterViewInit(): void {
    this.toggleDarkLightMode();

    // var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    // var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    // // Change the icons inside the button based on previous settings
    // if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //     themeToggleLightIcon.classList.remove('hidden');
    // } else {
    //     themeToggleDarkIcon.classList.remove('hidden');
    // }

    // var themeToggleBtn = document.getElementById('theme-toggle');

    // themeToggleBtn.addEventListener('click', function() {

    //     // toggle icons inside button
    //     themeToggleDarkIcon.classList.toggle('hidden');
    //     themeToggleLightIcon.classList.toggle('hidden');

    //     // if set via local storage previously
    //     if (localStorage.getItem('color-theme')) {
    //         if (localStorage.getItem('color-theme') === 'light') {
    //             document.documentElement.classList.add('dark');
    //             localStorage.setItem('color-theme', 'dark');
    //         } else {
    //             document.documentElement.classList.remove('dark');
    //             localStorage.setItem('color-theme', 'light');
    //         }

    //     // if NOT set via local storage previously
    //     } else {
    //         if (document.documentElement.classList.contains('dark')) {
    //             document.documentElement.classList.remove('dark');
    //             localStorage.setItem('color-theme', 'light');
    //         } else {
    //             document.documentElement.classList.add('dark');
    //             localStorage.setItem('color-theme', 'dark');
    //         }
    //     }

    // });
  }
}
