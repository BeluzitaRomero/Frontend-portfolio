import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css'],
})
export class HeaderTopComponent implements OnInit {
  isLogged = false;
  constructor(private router: Router, private toeknService: TokenService) {}

  ngOnInit(): void {
    this.toeknService.getToken()
      ? (this.isLogged = true)
      : (this.isLogged = false);
  }

  login() {
    this.router.navigate(['/login']);
  }

  onLogOut() {
    this.toeknService.logOut();
    window.location.reload();
  }
}
