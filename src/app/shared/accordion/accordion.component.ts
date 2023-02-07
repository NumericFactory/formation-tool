import { Component, Input } from '@angular/core';
import { Config, Menu } from './types';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  @Input() options!:any;
  @Input() menus!: Menu[];
  config!: Config;

  ngOnInit() {
    this.config = this.mergeConfig(this.options);
  }

  mergeConfig(options: Config) {
    const config = {
      // selector: '#accordion',
      multi: true
    };
    return { ...config, ...options };
  }

  toggle(index: number) {
    //submenu
    if (!this.config.multi) {
      this.menus
        .filter((menu, i) => i !== index && menu.active)
        .forEach(menu => (menu.active = !menu.active));
    }

    // Menu
    this.menus[index].active = !this.menus[index].active;
  }

  navigateToLesson(lessonId:any) {
    console.log(lessonId)
  }
}
