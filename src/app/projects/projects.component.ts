import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('0.5s ease', 
                    style({ height: 300, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 300, opacity: 1 }),
            animate('0s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    ),

    trigger(
        'rotateAnimation', 
        [
            state('default', style({ transform: 'rotate(0deg)' })),
            state('rotated', style({ transform: 'rotate(-180deg)' })),
            transition('rotated => default', animate('0.3s ease')),
            transition('default => rotated', animate('0.3s ease'))
        ]
      )
  ]

})



export class ProjectsComponent {

    kgIsCollapsed1 = false;
    kgIsCollapsed2 = true;
    kgIsCollapsed3 = true;

    kgShowVideo = true;
    kgShowCarousel = false;
    active = 1;

    state: string = 'default';

    kgRotateState1: string = 'rotated';
    kgRotateState2: string = 'default';
    kgRotateState3: string = 'default';

    cbShowVideoWeb = true;
    cbShowVideoMobile = false;
    cbShowCarousel =  false;


    rotate() {
        this.state = (this.state === 'default' ? 'rotated' : 'default');
    }

    kgRotate(num: number) {

        console.log(num);

        switch(num) {
            case 1:
                this.kgRotateState1 = (this.kgRotateState1 === 'default' ? 'rotated' : 'default');
                break;
            case 2:
                this.kgRotateState2 = (this.kgRotateState2 === 'default' ? 'rotated' : 'default');
                break;
            case 3:
                this.kgRotateState3 = (this.kgRotateState3 === 'default' ? 'rotated' : 'default');
                break;
            default:
                break;
        }
    }


    kgRotate2() {
        this.state = (this.state === 'default' ? 'rotated' : 'default');
    }

    kgRotate3() {
        this.state = (this.state === 'default' ? 'rotated' : 'default');
    }



  constructor() {}

  ngOnInit() {
  }



 




}
