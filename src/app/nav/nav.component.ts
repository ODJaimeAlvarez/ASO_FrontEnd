import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isLogged= false;

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
    if(this.tokenService.getToken()) {
      this.isLogged=true;
    } else {
      this.isLogged=false;
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

}
