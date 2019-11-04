import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './starter.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .dark-modal .modal-content {
        background-color: #009efb;
        color: white;
      }
      .dark-modal .close {
        color: white;
      }
      .light-blue-backdrop {
        background-color: #5cb3fd;
      }
    `
  ]
})
export class StarterComponent implements AfterViewInit {
  subtitle: string;
  title: string;

  currentJustify = 'start';

  currentOrientation = 'horizontal';
  
  constructor(private modalService: NgbModal) {
    this.subtitle = 'This is some text within a card block.';
  }

  ngAfterViewInit() {}

  public beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'tab-preventchange2') {
      $event.preventDefault();
    }
  }
  open(content: any, modeltitle: string) {
    this.title = modeltitle;
    this.modalService.open(content, { size: 'lg' });
  }
}
