import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BookOpen } from 'lucide-react';

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center">
           <Link href="/" className="flex items-center gap-2 font-bold">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="font-headline text-2xl font-bold text-foreground">CollabSpace</span>
          </Link>
        </div>
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-2xl">Create an Account</CardTitle>
            <CardDescription>
              Join CollabSpace and start collaborating in minutes.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Your Name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full" asChild>
                 <Link href="/dashboard">Create Account</Link>
              </Button>
              <Button variant="outline" className="w-full">
                Sign Up with Google
              </Button>
            </form>
            <div className="mt-4 text-center text-sm">
              Already have an account?{' '}
              <Link href="/login" className="font-medium text-primary hover:underline">
                Log in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
