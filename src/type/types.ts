export type LandingPageNews = {
  id: string;
  title: string;
  publishedAt: string;
  categoryName: string;
};

export type NewsArrayResponse = {
  news: {
    id: string;
    title: string;
    publishedAt: string;
    category: { name: string };
  }[];
};

export type NewsResponse = {
  id: string;
  title: string;
  publishedAt: string;
  category: { name: string };
};
