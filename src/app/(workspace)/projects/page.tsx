import Link from 'next/link';
import Image from 'next/image';
import {
  Plus,
  ArrowRight,
  ListFilter,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { projects } from '@/lib/data';

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-headline text-3xl font-bold">Projects</h1>
          <p className="text-muted-foreground">
            All your collaborative workspaces in one place.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <ListFilter className="mr-2 h-4 w-4" />
                Sort By
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Sort by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Last updated</DropdownMenuItem>
              <DropdownMenuItem>Name</DropdownMenuItem>
              <DropdownMenuItem>Creation date</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col">
            <CardHeader>
              <div className="relative mb-4 h-40 w-full">
                <Image
                  src={project.thumbnailUrl}
                  alt={project.name}
                  fill
                  className="rounded-lg object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription className="line-clamp-2">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex -space-x-2 overflow-hidden">
                {project.members.map((member) => (
                  <Avatar key={member.id} className="h-8 w-8 border-2 border-card">
                    <AvatarImage src={member.avatarUrl} />
                    <AvatarFallback>{member.avatarFallback}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <p className="text-xs text-muted-foreground">
                Updated {project.lastUpdated}
              </p>
              <Button variant="secondary" size="sm" asChild>
                <Link href={`/projects/${project.id}`}>
                  Open <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
