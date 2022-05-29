import { Component, Input, OnInit } from '@angular/core';
import { RepoDefinition } from '../../../../shared/interfaces/RepoDefinition';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss'],
})
export class RepoComponent {
  @Input() organization: { name: string; link: string };
  @Input() repo: RepoDefinition;

  panelOpenState = false;
}
