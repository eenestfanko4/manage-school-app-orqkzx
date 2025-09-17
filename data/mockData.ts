
import { User, Student, Teacher, Announcement, Event, Grade } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Admin',
    email: 'admin@school.edu',
    role: 'admin',
  },
  {
    id: '2',
    name: 'Sarah Teacher',
    email: 'sarah@school.edu',
    role: 'teacher',
  },
  {
    id: '3',
    name: 'Mike Student',
    email: 'mike@school.edu',
    role: 'student',
  },
];

export const mockStudents: Student[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice.johnson@school.edu',
    grade: '10',
    class: '10A',
    dateOfBirth: '2008-05-15',
    address: '123 Main St, City, State 12345',
    phone: '(555) 123-4567',
    emergencyContact: '(555) 987-6543',
    enrollmentDate: '2023-09-01',
    status: 'active',
  },
  {
    id: '2',
    name: 'Bob Smith',
    email: 'bob.smith@school.edu',
    grade: '11',
    class: '11B',
    dateOfBirth: '2007-08-22',
    address: '456 Oak Ave, City, State 12345',
    phone: '(555) 234-5678',
    emergencyContact: '(555) 876-5432',
    enrollmentDate: '2022-09-01',
    status: 'active',
  },
  {
    id: '3',
    name: 'Carol Davis',
    email: 'carol.davis@school.edu',
    grade: '9',
    class: '9C',
    dateOfBirth: '2009-12-03',
    address: '789 Pine Rd, City, State 12345',
    phone: '(555) 345-6789',
    emergencyContact: '(555) 765-4321',
    enrollmentDate: '2024-09-01',
    status: 'active',
  },
];

export const mockTeachers: Teacher[] = [
  {
    id: '1',
    name: 'Dr. Emily Wilson',
    email: 'emily.wilson@school.edu',
    subject: 'Mathematics',
    classes: ['10A', '11A', '12A'],
    phone: '(555) 111-2222',
    hireDate: '2020-08-15',
    status: 'active',
  },
  {
    id: '2',
    name: 'Mr. David Brown',
    email: 'david.brown@school.edu',
    subject: 'English Literature',
    classes: ['9B', '10B', '11B'],
    phone: '(555) 333-4444',
    hireDate: '2019-09-01',
    status: 'active',
  },
];

export const mockAnnouncements: Announcement[] = [
  {
    id: '1',
    title: 'Parent-Teacher Conference',
    content: 'Parent-teacher conferences will be held next week. Please schedule your appointments through the school portal.',
    author: 'Principal Johnson',
    date: '2024-01-15',
    priority: 'high',
    targetAudience: ['parents', 'teachers'],
  },
  {
    id: '2',
    title: 'Science Fair Registration',
    content: 'Registration for the annual science fair is now open. Students can submit their project proposals until January 30th.',
    author: 'Ms. Rodriguez',
    date: '2024-01-12',
    priority: 'medium',
    targetAudience: ['students', 'teachers'],
  },
  {
    id: '3',
    title: 'Winter Break Schedule',
    content: 'School will be closed from December 23rd to January 8th for winter break. Classes resume on January 9th.',
    author: 'Administration',
    date: '2024-01-10',
    priority: 'low',
    targetAudience: ['all'],
  },
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Basketball Championship',
    description: 'Final game of the inter-school basketball tournament',
    date: '2024-01-25',
    time: '15:00',
    location: 'School Gymnasium',
    type: 'sports',
  },
  {
    id: '2',
    title: 'Math Olympiad',
    description: 'Regional mathematics competition for grades 9-12',
    date: '2024-02-05',
    time: '09:00',
    location: 'Auditorium',
    type: 'academic',
  },
  {
    id: '3',
    title: 'Cultural Night',
    description: 'Annual cultural celebration featuring performances from all grades',
    date: '2024-02-14',
    time: '18:00',
    location: 'Main Hall',
    type: 'cultural',
  },
];

export const mockGrades: Grade[] = [
  {
    id: '1',
    studentId: '1',
    subject: 'Mathematics',
    score: 85,
    maxScore: 100,
    date: '2024-01-10',
    type: 'exam',
  },
  {
    id: '2',
    studentId: '1',
    subject: 'English',
    score: 92,
    maxScore: 100,
    date: '2024-01-08',
    type: 'assignment',
  },
  {
    id: '3',
    studentId: '2',
    subject: 'Mathematics',
    score: 78,
    maxScore: 100,
    date: '2024-01-10',
    type: 'exam',
  },
];
