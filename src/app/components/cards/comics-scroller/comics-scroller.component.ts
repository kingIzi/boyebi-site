import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comics-scroller',
  templateUrl: './comics-scroller.component.html',
  styleUrls: ['./comics-scroller.component.scss'],
})
export class ComicsScrollerComponent {
  @Input() heading!: string;
}
