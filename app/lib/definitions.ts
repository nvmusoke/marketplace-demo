export type User = {
  id: string;
  name: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  image_url: string;
};

export type TalentType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  bio: string;
  talent: string;
  external_link: string;
  rating: number;
};
