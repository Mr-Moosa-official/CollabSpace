import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { reviews } from '@/lib/data';

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default function ReviewsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-headline text-3xl font-bold">Reviews</h1>
        <p className="text-muted-foreground">
          See what our users have to say about CollabSpace.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <Card key={review.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={review.avatarUrl} alt={review.name} />
                  <AvatarFallback>{review.avatarFallback}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base font-semibold">{review.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground">"{review.text}"</p>
            </CardContent>
            <CardFooter>
              <div className="flex text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-5 w-5 ${i < review.rating ? 'fill-current' : ''}`}
                  />
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
