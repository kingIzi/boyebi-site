import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-scroller',
  templateUrl: './card-scroller.component.html',
  styleUrls: ['./card-scroller.component.scss'],
})
export class CardScrollerComponent {
  @Input() heading!: string;
}
