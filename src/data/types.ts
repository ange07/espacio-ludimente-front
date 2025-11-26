export interface ServiceData {
  title: string;
  target: string;
  focus: string[];
  method: string;
  price: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  image?: string;
}
