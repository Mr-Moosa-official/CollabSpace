'use client';

import { useState, useTransition } from 'react';
import {
  Share2,
  Users,
  MessageCircle,
  History,
  Star,
  Sparkles,
  Loader,
  Paperclip,
  Send,
  MoreHorizontal,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import { projects, users, messages, activities } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { suggestContent, SuggestContentOutput } from '@/ai/flows/ai-suggest-content';
import { useToast } from '@/hooks/use-toast';

function ActivityItem({ activity }: { activity: (typeof activities)[0] }) {
  return (
    <div className="flex items-start gap-3">
      <Avatar className="h-8 w-8 flex-shrink-0">
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

function MessageItem({ message }: { message: (typeof messages)[0] }) {
  return (
    <div className="flex items-start gap-3">
      <Avatar className="h-8 w-8 flex-shrink-0">
        <AvatarImage src={message.user.avatarUrl} alt={message.user.name} />
        <AvatarFallback>{message.user.avatarFallback}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-baseline gap-2">
            <p className="font-medium text-sm">{message.user.name}</p>
            <p className="text-xs text-muted-foreground">{message.timestamp}</p>
        </div>
        <p className="text-sm text-muted-foreground">{message.text}</p>
      </div>
    </div>
  );
}


export default function ProjectPage({ params }: { params: { id: string } }) {
  const [isPending, startTransition] = useTransition();
  const [suggestions, setSuggestions] = useState<SuggestContentOutput | null>(null);
  const [documentContent, setDocumentContent] = useState(
    'This is the Q3 marketing campaign brief. Our primary goal is to increase brand awareness by 20% among our target demographic. Key initiatives will include a social media push, influencer partnerships, and a content marketing series focused on customer success stories.'
  );
  const { toast } = useToast();

  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  const handleSuggestContent = () => {
    startTransition(async () => {
      setSuggestions(null);
      try {
        const result = await suggestContent({
          text: documentContent,
          context: `This document is for the project: ${project.name}`,
        });
        setSuggestions(result);
      } catch (error) {
        console.error('AI suggestion failed:', error);
        toast({
          title: 'Error',
          description: 'Failed to get AI suggestions. Please try again.',
          variant: 'destructive',
        });
      }
    });
  };

  const insertSuggestion = (suggestion: string) => {
    setDocumentContent(prev => `${prev}\n\n${suggestion}`);
  }

  const otherUsers = users.slice(1, 4);

  return (
    <div className="flex h-[calc(100vh-5rem)] flex-col gap-4 lg:flex-row">
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="font-headline text-2xl font-bold">{project.name}</h1>
            <p className="text-sm text-muted-foreground">
              Last saved 3 minutes ago
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {project.members.map((member) => (
                <Avatar key={member.id} className="h-9 w-9 border-2 border-background">
                  <AvatarImage src={member.avatarUrl} alt={member.name} />
                  <AvatarFallback>{member.avatarFallback}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <Button variant="outline">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button variant="ghost" size="icon">
              <Star className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <Card className="relative flex-1">
          <CardContent className="h-full p-2">
            <Textarea
              value={documentContent}
              onChange={(e) => setDocumentContent(e.target.value)}
              placeholder="Start writing your document..."
              className="h-full w-full resize-none border-0 p-4 text-base focus-visible:ring-0"
            />
            {otherUsers.map((user, index) => (
              <div
                key={user.id}
                className="absolute"
                style={{
                  left: `${20 + index * 25}%`,
                  top: `${15 + index * 20}%`,
                  transition: 'all 0.5s',
                }}
              >
                <div className="group flex items-center gap-1">
                  <div className="h-4 w-1 -skew-x-12" style={{ backgroundColor: `hsl(${index * 90}, 70%, 50%)` }}></div>
                  <span className="rounded-md px-1.5 py-0.5 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100" style={{ backgroundColor: `hsl(${index * 90}, 70%, 50%)` }}>
                    {user.name}
                  </span>
                </div>
              </div>
            ))}
            
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  size="icon"
                  className="absolute bottom-4 right-4 rounded-full"
                  onClick={handleSuggestContent}
                  disabled={isPending}
                >
                  {isPending ? <Loader className="animate-spin" /> : <Sparkles />}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">AI Suggestions</h4>
                  <p className="text-sm text-muted-foreground">
                    Content ideas based on your document.
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  {isPending && <p className="text-sm text-muted-foreground">Generating...</p>}
                  {suggestions?.suggestions.map((s, i) => (
                    <Button
                      key={i}
                      variant="ghost"
                      className="h-auto w-full justify-start text-left"
                      onClick={() => insertSuggestion(s)}
                    >
                      {s}
                    </Button>
                  ))}
                  {suggestions && suggestions.suggestions.length === 0 && (
                    <p className="text-sm text-muted-foreground">No suggestions available.</p>
                  )}
                </div>
              </PopoverContent>
            </Popover>
          </CardContent>
        </Card>
      </div>

      <div className="lg:w-[350px]">
        <Tabs defaultValue="chat" className="flex h-full flex-col">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="chat">
              <MessageCircle className="mr-2 h-4 w-4" /> Chat
            </TabsTrigger>
            <TabsTrigger value="activity">
              <History className="mr-2 h-4 w-4" /> Activity
            </TabsTrigger>
            <TabsTrigger value="members">
              <Users className="mr-2 h-4 w-4" /> Members
            </TabsTrigger>
          </TabsList>
          <TabsContent value="chat" className="flex-grow overflow-auto">
            <Card className="flex h-full flex-col">
              <CardHeader>
                <CardTitle>Project Chat</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <ScrollArea className="h-full">
                    <div className="space-y-4 pr-4">
                        {messages.map((msg) => (
                            <MessageItem key={msg.id} message={msg} />
                        ))}
                    </div>
                </ScrollArea>
              </CardContent>
               <div className="border-t p-2">
                  <div className="relative">
                    <Input placeholder="Type a message..." className="pr-20" />
                    <div className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center">
                        <Button variant="ghost" size="icon"><Paperclip className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="icon"><Send className="h-4 w-4" /></Button>
                    </div>
                  </div>
                </div>
            </Card>
          </TabsContent>
          <TabsContent value="activity" className="flex-grow overflow-auto">
             <Card className="h-full">
              <CardHeader>
                <CardTitle>Live Activity</CardTitle>
                <CardDescription>A log of recent project events.</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[calc(100vh-16rem)]">
                    <div className="space-y-6 pr-4">
                        {activities.map((activity) => (
                            <ActivityItem key={activity.id} activity={activity} />
                        ))}
                    </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="members" className="flex-grow overflow-auto">
             <Card className="h-full">
              <CardHeader>
                <CardTitle>Members</CardTitle>
                <CardDescription>
                  {project.members.length} people in this project.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {project.members.map(member => (
                    <div key={member.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Avatar className="h-9 w-9">
                                <AvatarImage src={member.avatarUrl} alt={member.name} />
                                <AvatarFallback>{member.avatarFallback}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-medium">{member.name}</p>
                                <p className="text-sm text-muted-foreground">Online</p>
                            </div>
                        </div>
                        <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
