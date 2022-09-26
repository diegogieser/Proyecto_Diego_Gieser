import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo-pf',
  templateUrl: './logo-pf.component.html',
  styleUrls: ['./logo-pf.component.css']
})
export class LogoPFComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/login'])
  }

}
