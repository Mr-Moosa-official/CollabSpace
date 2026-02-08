import { placeholderImages as allImages } from './placeholder-images.json';

export const placeholderImages = allImages;

export type User = {
  id: string;
  name: string;
  avatarUrl: string;
  avatarFallback: string;
};

export const users: User[] = [
  { id: 'user1', name: 'Alex Rivera', avatarUrl: placeholderImages.find(p => p.id === 'user1')?.imageUrl || '', avatarFallback: 'AR' },
  { id: 'user2', name: 'Samantha Bee', avatarUrl: placeholderImages.find(p => p.id === 'user2')?.imageUrl || '', avatarFallback: 'SB' },
  { id: 'user3', name: 'David Chen', avatarUrl: placeholderImages.find(p => p.id === 'user3')?.imageUrl || '', avatarFallback: 'DC' },
  { id: 'user4', name: 'Maria Garcia', avatarUrl: placeholderImages.find(p => p.id === 'user4')?.imageUrl || '', avatarFallback: 'MG' },
  { id: 'user5', name: 'Kenji Tanaka', avatarUrl: placeholderImages.find(p => p.id === 'user5')?.imageUrl || '', avatarFallback: 'KT' },
  { id: 'user6', name: 'Olivia Martinez', avatarUrl: placeholderImages.find(p => p.id === 'user6')?.imageUrl || '', avatarFallback: 'OM' },
];

export const loggedInUser = users[0];

export type Project = {
  id: string;
  name: string;
  description: string;
  lastUpdated: string;
  members: User[];
  thumbnailUrl: string;
};

export const projects: Project[] = [
  { id: 'proj1', name: 'Q3 Marketing Campaign', description: 'Planning and execution of the main marketing campaign for the third quarter.', lastUpdated: '2 hours ago', members: [users[0], users[1], users[3]], thumbnailUrl: placeholderImages.find(p => p.id === 'project1')?.imageUrl || ''},
  { id: 'proj2', name: 'Website Redesign', description: 'A complete overhaul of the company website, from UX to deployment.', lastUpdated: '1 day ago', members: [users[1], users[2], users[4]], thumbnailUrl: placeholderImages.find(p => p.id === 'project2')?.imageUrl || ''},
  { id: 'proj3', name: 'Mobile App Launch', description: 'Developing and launching the new flagship mobile application for iOS and Android.', lastUpdated: '3 days ago', members: [users[0], users[2], users[4], users[5]], thumbnailUrl: placeholderImages.find(p => p.id === 'project3')?.imageUrl || ''},
  { id: 'proj4', name: 'Annual Report 2024', description: 'Compilation and design of the 2024 annual report for shareholders.', lastUpdated: '1 week ago', members: [users[0], users[3]], thumbnailUrl: placeholderImages.find(p => p.id === 'project4')?.imageUrl || ''},
];

export type Activity = {
  id: string;
  user: User;
  action: string;
  target: string;
  timestamp: string;
};

export const activities: Activity[] = [
  { id: 'act1', user: users[1], action: 'commented on', target: 'Homepage Mockup', timestamp: '5 minutes ago' },
  { id: 'act2', user: users[2], action: 'edited', target: 'API Documentation', timestamp: '25 minutes ago' },
  { id: 'act3', user: users[0], action: 'assigned a task to David Chen:', target: '"Implement new auth flow"', timestamp: '1 hour ago' },
  { id: 'act4', user: users[4], action: 'uploaded a file:', target: 'logo-final-v3.svg', timestamp: '2 hours ago' },
  { id: 'act5', user: users[3], action: 'completed a task:', target: '"Draft press release"', timestamp: '4 hours ago' },
];

export type Message = {
  id: string;
  user: User;
  text: string;
  timestamp: string;
};

export const messages: Message[] = [
  { id: 'msg1', user: users[1], text: "Hey team, what's the status on the new landing page design?", timestamp: '10:30 AM' },
  { id: 'msg2', user: users[2], text: "I've just pushed the latest wireframes. Let me know what you think!", timestamp: '10:31 AM' },
  { id: 'msg3', user: users[0], text: "Looks great, David! @Samantha can you start on the high-fidelity mockups based on this?", timestamp: '10:35 AM' },
  { id: 'msg4', user: users[1], text: "On it! I should have something to show by EOD.", timestamp: '10:36 AM' },
  { id: 'msg5', user: users[4], text: "👍", timestamp: '10:38 AM' },
];

export type Course = {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export const courses: Course[] = [
  { id: 'course1', title: 'Advanced Collaboration Techniques', description: 'Learn the strategies top teams use to maximize efficiency and innovation.', thumbnailUrl: placeholderImages.find(p => p.id === 'course1')?.imageUrl || '', duration: '3 hours', level: 'Advanced' },
  { id: 'course2', title: 'Mastering Project Management', description: 'From Gantt charts to agile sprints, become a project management pro.', thumbnailUrl: placeholderImages.find(p => p.id === 'course2')?.imageUrl || '', duration: '5 hours', level: 'Intermediate' },
  { id: 'course3', title: 'Effective Remote Communication', description: 'Master the art of clear, concise, and engaging communication for remote teams.', thumbnailUrl: placeholderImages.find(p => p.id === 'course3')?.imageUrl || '', duration: '2 hours', level: 'Beginner' },
  { id: 'course4', title: 'AI in the Modern Workplace', description: 'Understand and leverage AI tools to boost productivity and automate tasks.', thumbnailUrl: placeholderImages.find(p => p.id === 'course4')?.imageUrl || '', duration: '4 hours', level: 'Intermediate' },
];

export type Review = {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  avatarFallback: string;
  text: string;
  rating: number;
}

export const reviews: Review[] = [
  { id: 'rev1', name: 'Alex Rivera', role: 'Project Manager, TechCorp', avatarUrl: placeholderImages.find(p => p.id === 'user1')?.imageUrl || '', avatarFallback: 'AR', text: 'CollabSpace has transformed how our team works. The real-time editing and integrated chat are game-changers for our productivity.', rating: 5 },
  { id: 'rev2', name: 'Samantha Bee', role: 'Lead Designer, CreativeMinds', avatarUrl: placeholderImages.find(p => p.id === 'user2')?.imageUrl || '', avatarFallback: 'SB', text: 'The UI is so clean and intuitive. It makes collaboration feel effortless, not cluttered. The AI suggestions are surprisingly helpful too!', rating: 5 },
  { id: 'rev3', name: 'David Chen', role: 'Software Engineer, InnovateIO', avatarUrl: placeholderImages.find(p => p.id === 'user3')?.imageUrl || '', avatarFallback: 'DC', text: 'As a developer, I appreciate the version history feature. It\'s saved us from potential headaches multiple times. A very well-thought-out tool.', rating: 5 },
  { id: 'rev4', name: 'Maria Garcia', role: 'Marketing Lead, Growth Co.', avatarUrl: placeholderImages.find(p => p.id === 'user4')?.imageUrl || '', avatarFallback: 'MG', text: 'The ability to have all project context in one place—docs, conversations, and activity—is invaluable. CollabSpace has streamlined our workflow immensely.', rating: 5 },
  { id: 'rev5', name: 'Kenji Tanaka', role: 'Product Owner, NextGen Solutions', avatarUrl: placeholderImages.find(p => p.id === 'user5')?.imageUrl || '', avatarFallback: 'KT', text: 'We switched from a combination of three different tools to just CollabSpace. The consolidation has saved us time and money.', rating: 4 },
  { id: 'rev6', name: 'Olivia Martinez', role: 'Freelance Writer', avatarUrl: placeholderImages.find(p => p.id === 'user6')?.imageUrl || '', avatarFallback: 'OM', text: 'I use CollabSpace to work with my clients. It\'s professional, easy to use, and they love the transparency of the activity feed.', rating: 5 },
];
