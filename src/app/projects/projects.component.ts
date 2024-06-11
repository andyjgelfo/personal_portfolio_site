import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],

})



export class ProjectsComponent {

    kgIsCollapsed1 = false;
    kgIsCollapsed2 = false;
    kgIsCollapsed3 = false;

    kgShowVideo = true;
    kgShowCarousel = false;



  constructor() {}

  ngOnInit() {
  }



 




}
