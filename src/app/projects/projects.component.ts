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

    //Collapse vars
    kgIsCollapsed1 = false;
    kgIsCollapsed2 = false;
    kgIsCollapsed3 = false;
    cbIsCollapsed1 =  false;
    cbIsCollapsed2 =  false;
    ucIsCollapsed1 = false;    
    ucIsCollapsed2 = false;    
    ucIsCollapsed3 = false;    

    //Show vars
    kgShowVideo = true;
    kgShowCarousel = false;
    cbShowVideoWeb = true;
    cbShowVideoMobile = false;
    cbShowCarousel =  false;
    ucShowVideo = true;
    ucShowCarousel = false;
    active = 1;


    //Rotate vars
    kgRotateState1: string = 'rotated';
    kgRotateState2: string = 'rotated';
    kgRotateState3: string = 'rotated';
    cbRotateState1: string = 'rotated';
    cbRotateState2: string = 'rotated';
    ucRotateState1: string = 'rotated';
    ucRotateState2: string = 'rotated';
    ucRotateState3: string = 'rotated';

    
    //Rotate function for KnightroGrade
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

    //Rotate function for CerealBoxd
    cbRotate(num: number) {

        console.log(num);

        switch(num) {
            case 1:
                this.cbRotateState1 = (this.cbRotateState1 === 'default' ? 'rotated' : 'default');
                break;
            case 2:
                this.cbRotateState2 = (this.cbRotateState2 === 'default' ? 'rotated' : 'default');
                break;
            default:
                break;
        }
    }

    //Rotate function for Unwilling Chef
    ucRotate(num: number) {

        console.log(num);

        switch(num) {
            case 1:
                this.ucRotateState1 = (this.ucRotateState1 === 'default' ? 'rotated' : 'default');
                break;
            case 2:
                this.ucRotateState2 = (this.ucRotateState2 === 'default' ? 'rotated' : 'default');
                break;
            case 3:
                this.ucRotateState3 = (this.ucRotateState3 === 'default' ? 'rotated' : 'default');
                break;
            default:
                break;
        }
    }





  constructor() {}

  ngOnInit() {
  }



 




}
