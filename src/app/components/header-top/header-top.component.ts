import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css'],
})
export class HeaderTopComponent implements OnInit {
  isLogged: boolean = false;
  showNav: boolean = false;
  size: number;

  constructor(private router: Router, private toeknService: TokenService) {}

  ngOnInit(): void {
    this.toeknService.getToken()
      ? (this.isLogged = true)
      : (this.isLogged = false);
    // this.onResize(window);
  }

  login() {
    this.router.navigate(['/login']);
  }

  onLogOut() {
    this.toeknService.logOut();
    window.location.reload();
  }

  toggleNav() {
    this.showNav = !this.showNav;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log(this.size);
    this.size = event.target.innerWidth;
  }
}
