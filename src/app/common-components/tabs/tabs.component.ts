import { AfterContentInit, ChangeDetectorRef, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.sass']
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  constructor() {}

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter(tab => tab.active);
    console.log('tabs', this.tabs)
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    setTimeout(() => {
      this.tabs.toArray().forEach(tab => (tab.active = false));
      tab.active = true;
    });
  }
}
