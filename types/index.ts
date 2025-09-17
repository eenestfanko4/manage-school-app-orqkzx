
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'teacher' | 'student' | 'parent';
  avatar?: string;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  grade: string;
  class: string;
  parentId?: string;
  dateOfBirth: string;
  address: string;
  phone: string;
  emergencyContact: string;
  enrollmentDate: string;
  status: 'active' | 'inactive' | 'graduated';
}

export interface Teacher {
  id: string;
  name: string;
  email: string;
  subject: string;
  classes: string[];
  phone: string;
  hireDate: string;
  status: 'active' | 'inactive';
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  priority: 'low' | 'medium' | 'high';
  targetAudience: string[];
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: 'academic' | 'sports' | 'cultural' | 'meeting';
}

export interface Grade {
  id: string;
  studentId: string;
  subject: string;
  score: number;
  maxScore: number;
  date: string;
  type: 'quiz' | 'exam' | 'assignment' | 'project';
}
