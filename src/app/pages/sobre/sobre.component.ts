import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  constructor(private route: ActivatedRoute) {

    this.route.params.subscribe(res => console.log(res.id));
    
   }

  ngOnInit(): void {
  }

}
