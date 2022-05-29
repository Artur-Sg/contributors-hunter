import { of } from 'rxjs';
import { contributorMock } from '../mocks/contributor';
import { organizationDefinitionMock } from '../mocks/organization-definition';
import { organizationsMock } from '../mocks/organizations';
import { publicMemberMock } from '../mocks/public-member';
import { reposMock } from '../mocks/repos';

const createSpy = jasmine.createSpy;

export class RestApiServiceStub {
  getOrganizations = createSpy().and.returnValue(of(organizationsMock));
  getOrganization = createSpy().and.returnValue(of(organizationDefinitionMock));
  getPublicMembers = createSpy().and.returnValue(of([publicMemberMock]));
  getOrganizationRepos = createSpy().and.returnValue(of(reposMock));
  getContributors = createSpy().and.returnValue(of([contributorMock]));
}
