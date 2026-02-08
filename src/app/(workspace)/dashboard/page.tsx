import Link from 'next/link';
import {
  ArrowRight,
  FolderKanban,
  FileText,
  MessageCircle,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { loggedInUser, projects, activities } from '@/lib/data';

function ActivityItem({ activity }: { activity: (typeof activities)[0] }) {
  return (
    <div className="flex items-start gap-3">
      <Avatar className="h-9 w-9">
        <AvatarImage src={activity.user.avatarUrl} alt={activity.user.name} />
        <AvatarFallback>{activity.user.avatarFallback}</AvatarFallback>
      </Avatar>
      <div className="flex-1 text-sm">
        <p>
          <span className="font-medium">{activity.user.name}</span>{' '}
          {activity.action}{' '}
          <span className="font-medium text-primary">{activity.target}</span>
        </p>
        <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const recentProjects = projects.slice(0, 3);
  const recentActivities = activities.slice(0, 5);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-headline text-3xl font-bold">
          Welcome back, {loggedInUser.name.split(' ')[0]}!
        </h1>
        <p className="text-muted-foreground">
          Here's a quick overview of your workspace.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            <FolderKanban className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{projects.length}</div>
            <p className="text-xs text-muted-foreground">+2 since last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Documents</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124</div>
            <p className="text-xs text-muted-foreground">+15 created this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
            <MessageCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">in 3 projects</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Projects</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/projects">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentProjects.map((project) => (
                <Link
                  href={`/projects/${project.id}`}
                  key={project.id}
                  className="group flex items-center gap-4 rounded-lg p-2 transition-colors hover:bg-accent"
                >
                  <div className="flex-1 space-y-1">
                    <p className="font-medium">{project.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Last updated: {project.lastUpdated}
                    </p>
                  </div>
                  <div className="flex -space-x-2 overflow-hidden">
                    {project.members.map((member) => (
                      <Avatar
                        key={member.id}
                        className="h-7 w-7 border-2 border-background"
                      >
                        <AvatarImage src={member.avatarUrl} />
                        <AvatarFallback>{member.avatarFallback}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Live Activity</CardTitle>
            <CardDescription>What your team is up to.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentActivities.map((activity) => (
                <ActivityItem key={activity.id} activity={activity} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
