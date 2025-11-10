export interface Project {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
  languages: string[];
  imageUrl: string;
  startDate: string;
  endDate?: string;
  status: 'ongoing' | 'completed';
  url?: string;
  githubUrl?: string;
  author: Author;
  views: number;
  likes: number;
  createdAt: string;
  updatedAt: string;
}

export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio?: string;
  email?: string;
}

export interface ProjectCardProps {
  project: Project;
}

export interface ProjectListProps {
  projects: Project[];
}

export interface ProjectFilterOptions {
  search?: string;
  year?: string;
  tags?: string[];
  languages?: string[];
  status?: 'all' | 'ongoing' | 'completed';
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
