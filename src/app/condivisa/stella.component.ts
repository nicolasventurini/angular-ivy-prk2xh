import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'stella',
  templateUrl: './stella.component.html',
  styleUrls: ['./stella.component.css'],
})
export class StellaComponent implements OnChanges {
  // rating: number = 4;
  @Input() rating: number;
  cropWidth: number;

  @Output() dalleStelle: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.cropWidth = this.rating * (75 / 5);
  }

  onClick() {
    this.dalleStelle.emit(`${this.rating}`);
  }
}
