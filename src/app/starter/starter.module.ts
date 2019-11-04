import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarterComponent } from './starter.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Dignose Tool - Health monitor',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Diagnose Tool - Health monitor' }
      ]
    },
    component: StarterComponent
  }
];

@NgModule({
  imports: [FormsModule, CommonModule, NgbModule, RouterModule.forChild(routes)],
  declarations: [StarterComponent]
})
export class StarterModule {}
