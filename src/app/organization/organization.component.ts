import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrganizationDefinition } from '../shared/interfaces/OrganizationDefinition';
import { RestApiService } from '../shared/services/rest-api/rest-api.service';
import { Router } from '@angular/router';
import { RoutePath } from '../shared/enums/route-path.enum';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss'],
})
export class OrganizationComponent implements OnInit {
  organization: OrganizationDefinition;
  login: string;

  constructor(private route: ActivatedRoute, private restApi: RestApiService, private router: Router) {}

  ngOnInit() {
    this.login = this.route.snapshot.paramMap.get('login');
    this.getOrganization();
  }

  getOrganization() {
    return this.restApi.getOrganization(this.login).subscribe((data: OrganizationDefinition) => {
      this.organization = data;
    });
  }

  back() {
    this.router.navigate([RoutePath.Root]);
  }
}
