export interface OrganizationDefinition {
  id: number;
  login: string;
  avatar_url: string;
  description: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  is_verified: boolean;
  html_url: string;
  created_at: Date;
  updated_at: Date;
}
