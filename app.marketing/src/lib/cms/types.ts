export type AuthorIds = 'alex' | 'jack' | 'hana';

export type Author = {
  id: AuthorIds;
  name: string;
  position: string;
  avatar: string;
  link: string;
  linkyUsername: string;
  linkyLink: string;
};

export interface BlogPost {
  title: string;
  content: {
    html: string;
  };
  slug: string;
  author: AuthorIds;
  displayedPublishedAt: string;
  description: string;
}
