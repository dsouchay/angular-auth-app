import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
     `
     *{
       margin:15px;
     }
     `
  ]
})
export class DashboardComponent {


  constructor(private router:Router,
              private auth:AuthService) { }

  logout(){
    this.router.navigateByUrl('/auth');
    this.auth.logout();
  }

  get usuario() {
    return this.auth.usuario;
  }


}
