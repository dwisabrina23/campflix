export interface Movie {
  name: string;
  rating: number;
  image: {
    original: string;
    medium: string;
  };
  officialSite: string;
  genres: string[];
  premiered: string;
  summary: string;
  url: string;
}
