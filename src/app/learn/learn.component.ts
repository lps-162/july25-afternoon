import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'learn',
  //templateUrl: './learn.component.html',

  template: `<h1>Learning Angular</h1>
  <h3>Some more html</h3>
  <p>Another paragraph</p>
  <input type="submit" value="CreateEmployee" class="blueTheme"/>
  
  <label for="" class="redTheme">
    Simple label with style tag
</label>`,

  //styleUrls: ['./learn.component.css'],
  styles: [
    `h1 { color: deeppink } 
    `,
    'h3 { color: aqua }',
    '.redTheme { color: red }'
    ]
})
export class LearnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
