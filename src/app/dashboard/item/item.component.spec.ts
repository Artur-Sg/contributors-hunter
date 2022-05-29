import { ComponentFixture, TestBed } from '@angular/core/testing';
import { organizationDefinitionMock } from '../../../tests/mocks/organization-definition';
import { RoutePath } from '../../shared/enums/route-path.enum';
import { ItemComponent } from './item.component';

describe('OrganizationItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return correct router link', () => {
    component.orgDefinition = organizationDefinitionMock;

    expect(component.routerLink).toEqual(['/', RoutePath.Organizations, organizationDefinitionMock.login]);
  });
});
