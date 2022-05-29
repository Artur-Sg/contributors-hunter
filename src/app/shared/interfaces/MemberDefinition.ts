export interface MemberDefinition {
  login: string;
  avatar_url: string;
  html_url: string;
  is_favorite: boolean;
  organization: { name: string; link: string };
}
