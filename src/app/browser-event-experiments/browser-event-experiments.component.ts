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
    this.hoverSection.addEventListener('mousemove', onMouseMove);
    this.hoverSection.addEventListener('click', onClick);
  }

  unSubscribe() {
    console.log('called Unsubscribe()');
    this.hoverSection.removeEventListener('mousemove', onMouseMove);
  }
}

function onMouseMove(ev: MouseEvent) {
  console.log(ev);
}

function onClick(ev: Event) {
  console.log('Click', ev);
}
