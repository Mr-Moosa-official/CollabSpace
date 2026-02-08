import Image from 'next/image';
import { Clock, BarChart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { courses } from '@/lib/data';

export default function CoursesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-headline text-3xl font-bold">Courses</h1>
        <p className="text-muted-foreground">
          Enhance your skills and master CollabSpace with our expert-led courses.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id} className="flex flex-col overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative h-48 w-full">
                <Image
                  src={course.thumbnailUrl}
                  alt={course.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </CardHeader>
            <div className="flex flex-1 flex-col p-6">
              <CardTitle className="mb-2 text-lg">{course.title}</CardTitle>
              <CardDescription className="flex-grow line-clamp-3">
                {course.description}
              </CardDescription>
              <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <BarChart className="h-4 w-4" />
                  <span>{course.level}</span>
                </div>
              </div>
            </div>
            <CardFooter className="bg-muted/50 p-4">
              <Button className="w-full">Enroll Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
