import {Pipe} from 'angular2/angular2';

@Pipe({ name: 'checkFlag' })
export class CheckFlagPipe {
  transform(value: boolean) {
    return value ? '\u2713' : '\u2718';
  }
}