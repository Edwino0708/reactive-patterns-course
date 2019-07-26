import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browser-event-experiments',
  templateUrl: './browser-event-experiments.component.html',
  styleUrls: ['./browser-event-experiments.component.css']
})
export class BrowserEventExperimentsComponent implements OnInit {
  hoverSection: HTMLElement;

  ngOnInit() {
    this.hoverSection = document.getElementById('hover');
    this.hoverSection.addEventListener('mousemove', this.onMouseMove);
  }

  onMouseMove(ev: MouseEvent) {
    console.log(ev);
  }

  unSubscribe() {
    console.log('called Unsubscribe()');
    this.hoverSection.removeEventListener('mousemove', this.onMouseMove);
  }
}
