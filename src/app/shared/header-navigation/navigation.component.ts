import { Component, AfterViewInit } from '@angular/core';
import {
  NgbModal,
  ModalDismissReasons,
  NgbPanelChangeEvent,
  NgbCarouselConfig
} from '@ng-bootstrap/ng-bootstrap';
declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements AfterViewInit {

  public showSearch = false;
  title: string;

  constructor(private modalService: NgbModal) {}

  ngAfterViewInit() {}

  open(content: any, modeltitle: string) {
    this.title = modeltitle;
    this.modalService.open(content, { size: 'lg' });
  }
}
