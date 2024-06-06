import { Component } from '@angular/core';

// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() {}

  ngOnInit(): void {
    const target = document.querySelector('.tw');

    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'white',
      typeSpeed: 80,
      deleteSpeed: 80
    })
    
    writer
    .type('-> UCF Alumni: Computer Science Major')
    .rest(500)
    .remove(22)
    .type('Digital Media Minor')
    .rest(500)
    .remove(31)
    .type('Software & Web Developer')
    .rest(500)
    .remove(24)
    // .changeOps({ deleteSpeed: 20 })
    // .remove(21)
    .type('Summa Cum Laude Graduate')
    .rest(500)
    .clear()
    .start()

    const target2 = document.querySelector('.tw2');

    const writer2 = new Typewriter(target2, {
      loop: true,
      typeColor: 'white',
      typeSpeed: 80,
      deleteSpeed: 80
    })
    
    writer2
    .type('-> UCF Alumni: Computer Science Major')
    .rest(500)
    .remove(22)
    .type('Digital Media Minor')
    .rest(500)
    .remove(31)
    .type('Software & Web Developer')
    .rest(500)
    .remove(24)
    // .changeOps({ deleteSpeed: 20 })
    // .remove(21)
    .type('Summa Cum Laude Graduate')
    .rest(500)
    .clear()
    .start()
      
              
  }

}
