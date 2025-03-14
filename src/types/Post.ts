export interface PostUpload {
  created_at: string;
  title: string;
  content: string;
  imagePath: string;
}

export interface Post {
  id: number;
  created_at: string;
  title: string;
  content: string;
  imagePath: string;
  imageUrl: string;
}