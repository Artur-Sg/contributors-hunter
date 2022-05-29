import { of } from 'rxjs';
import { organizationDefinitionMock } from '../mocks/organization-definition';
import { organizationsMock } from '../mocks/organizations';
import { publicMemberMock } from '../mocks/public-member';

const createSpy = jasmine.createSpy;

export class RestApiServiceStub {
  getOrganizations = createSpy().and.returnValue(of(organizationsMock));
  getOrganization = createSpy().and.returnValue(of(organizationDefinitionMock));
  getPublicMembers = createSpy().and.returnValue(of([publicMemberMock]));
}
