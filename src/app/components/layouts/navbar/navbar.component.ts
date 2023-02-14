import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public navLinks!: [
    { name: 'Videos'; section: 'videos' },
    { name: 'Comics'; section: 'comics' },
    { name: 'About'; section: 'about' }
  ];

  public scrollToView(elemId: string) {
    let section = document.getElementById(elemId) as HTMLElement;
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
