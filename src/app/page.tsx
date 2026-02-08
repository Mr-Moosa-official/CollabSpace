import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  MessageCircle,
  Users,
  FileEdit,
  Sparkles,
  History,
  ShieldCheck,
  BookOpen,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { placeholderImages } from '@/lib/data';

const features = [
  {
    icon: <FileEdit className="h-8 w-8 text-primary" />,
    title: 'Real-time Document Co-editing',
    description: 'Edit documents with your team simultaneously. See changes live and track every cursor.',
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-primary" />,
    title: 'Instant Project Chat',
    description: 'Communicate seamlessly within each project. Share files, ideas, and feedback instantly.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Live Activity Updates',
    description: 'Stay in the loop with a real-time feed of all project activities, from edits to comments.',
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: 'AI-Powered Suggestions',
    description: 'Boost your creativity and efficiency with intelligent content suggestions as you type.',
  },
  {
    icon: <History className="h-8 w-8 text-primary" />,
    title: 'Version History',
    description: 'Never lose your work. Automatically save versions and easily revert to previous document states.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Secure & Reliable',
    description: 'Your data is safe with us. We provide robust security and role-based access controls.',
  },
];

const testimonials = [
  {
    name: 'Alex Rivera',
    role: 'Project Manager',
    avatar: placeholderImages.find(p => p.id === 'user1')?.imageUrl,
    avatarFallback: 'AR',
    text: 'CollabSpace has transformed how our team works. The real-time editing and integrated chat are game-changers for our productivity.',
  },
  {
    name: 'Samantha Bee',
    role: 'Lead Designer',
    avatar: placeholderImages.find(p => p.id === 'user2')?.imageUrl,
    avatarFallback: 'SB',
    text: 'The UI is so clean and intuitive. It makes collaboration feel effortless, not cluttered. The AI suggestions are surprisingly helpful too!',
  },
  {
    name: 'David Chen',
    role: 'Software Engineer',
    avatar: placeholderImages.find(p => p.id === 'user3')?.imageUrl,
    avatarFallback: 'DC',
    text: 'As a developer, I appreciate the version history feature. It\'s saved us from potential headaches multiple times. A very well-thought-out tool.',
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="font-headline text-xl font-bold text-foreground">CollabSpace</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link href="#features" className="text-muted-foreground transition-colors hover:text-foreground">
              Features
            </Link>
            <Link href="#testimonials" className="text-muted-foreground transition-colors hover:text-foreground">
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild>
              <Link href="/dashboard">
                Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="container mx-auto px-4 py-20 text-center sm:py-32">
          <Badge
            variant="outline"
            className="mb-6 border-primary/50 bg-primary/10 text-primary"
          >
            <Sparkles className="mr-2 h-4 w-4" /> The Future of Teamwork is Here
          </Badge>
          <h1 className="font-headline text-4xl font-extrabold tracking-tighter md:text-6xl lg:text-7xl">
            Seamless Collaboration, <br />
            Unleashed Creativity.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            CollabSpace is the all-in-one workspace for your team to create, communicate, and achieve more together.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/dashboard">
                Start Collaborating <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative mt-16">
            <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-primary to-accent opacity-20 blur-3xl"></div>
            <Image
              src={placeholderImages.find(p => p.id === 'hero')?.imageUrl || ''}
              alt="CollabSpace dashboard preview"
              width={1200}
              height={750}
              className="relative rounded-lg border shadow-2xl"
              data-ai-hint="dashboard office"
              priority
            />
          </div>
        </section>

        <section id="features" className="w-full bg-card py-20 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
                Everything You Need, All in One Place
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Powerful features designed for modern teams to work faster and smarter.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="font-headline text-lg font-semibold">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="container mx-auto px-4 py-20 sm:py-32">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
              Loved by Teams Worldwide
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Don't just take our word for it. Here's what our users are saying.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base font-semibold">{testimonial.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">"{testimonial.text}"</p>
                </CardContent>
                <CardFooter>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="w-full border-t">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CollabSpace. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
