import { afterEveryRender, afterNextRender, Component, effect, OnChanges, OnInit, signal } from '@angular/core';

const log = (...messages: string[]) => {
  console.log(`${messages[0]} %c${messages.slice(1).join(', ')}`, 'color: #bada55')
}

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit, OnChanges {
  traditionalProperty = 'sebastian';
  signalProperty = signal('Sebastian')

  constructor() {
    log('Constructor Called')
  }

  changeTraditional() {
    this.traditionalProperty = 'Sebastian Gomez'
  }

  changeSignal() {
    this.signalProperty.set('Sebastian Gomez')
  }

  basicEffect = effect((onCleanup) => {
    log('basicEffect', 'Runs secondary effects')
    onCleanup(() => {
      log('onCleanup', 'Runs when the effects is going to be destroyed')
    })
  })

  ngOnInit() {
    log('ngOnInit', 'Runs once after Angular has initialized all the components inputs')
  }

  ngOnChanges() {
    log('ngOnChanges', 'Runs every time the comnponent`s imputs have changed.')
  }

  ngDoCheck() {
    log('ngDoCheck', 'Runs every time this component is checked for changes.')
  }

  ngAfterContentInit() {
    log('ngAfterContentInit', 'Runs once after the component`s content has been initialized.')
  }

  ngAfterContentChecked() {
    log('ngAfterContentChecked', 'Runs every time this component content has been checked for changes.')
  }

  ngAfterViewInit() {
    log('ngAfterViewInit', 'Runs once after component`s view has been initialized.')
  }

  ngAfterViewChecked() {
    log('ngAfterViewChecked', 'Runs every time the component`s view has been checked for changes.')
  }

  ngOnDestroy() {
    log('ngOnDestryo', 'Runs once the component is destroyed')
  }

  afterNextRenderEffect = afterNextRender(() => {
    log('afterNextRender', 'Runs once the next time that all camponents have been rendered to the DOM')
  })

  afterEveryRenderEffect = afterEveryRender(() => {
    log('afterEveryRender', 'Runs every time all components have been rendered to the DOM.')
  })
}
