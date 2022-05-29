export interface ContributorDefinition {
  login: string;
  avatar_url: string;
  html_url: string;
  is_favorite: boolean;
  contributions: number;
  organization: { name: string; link: string };
}
