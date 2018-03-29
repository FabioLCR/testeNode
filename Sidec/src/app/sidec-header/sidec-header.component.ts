import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-sidec-header',
  templateUrl: './sidec-header.component.html',
  styleUrls: ['./sidec-header.component.css']
})
export class SidecHeaderComponent implements OnInit {

  constructor(private kc: KeycloakService) { }

  logout() {
    this.kc.logout();
  }

  ngOnInit() {
  }

}
