import { Component, OnInit } from '@angular/core';
import {
  globalEventBus,
  LESSONS_LIST_AVAILABLE,
  ADD_NEW_LESSON
} from './event-bus';
import { tessLessons } from '../shared/model/tess-lessons';

@Component({
  selector: 'app-event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('Top Level component broadcasted all lessons ...');
    globalEventBus.notifyObservers(
      LESSONS_LIST_AVAILABLE,
      tessLessons.slice(0)
    );
  }

  addLesson(lessonText: string) {
    globalEventBus.notifyObservers(ADD_NEW_LESSON, lessonText);
  }
}
