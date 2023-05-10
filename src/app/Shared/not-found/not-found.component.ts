import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  code: number;
  message: string;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state;
    this.code = state?.['code'] || 500;
    this.message = state?.['message'] || 'Une erreur est survenue.';
  }

  ngOnInit(): void {
  }
}
