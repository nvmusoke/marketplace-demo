import {
  Chip,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
} from '@mui/material';
import { auth } from '@/auth';

export default async function TitleCards() {
  const titles = [
    {
      name: 'DJs',
      popular: true,
      image: '/djbackground.jpeg',
      alt: 'DJ background',
    },
    {
      name: 'Bartenders',
      popular: true,
      image: '/barbackground.jpeg',
      alt: 'Bar background',
    },
    {
      name: 'Videographers',
      popular: false,
      image: '/videobackground.jpeg',
      alt: 'Videographer background',
    },
    {
      name: 'Photographers',
      popular: false,
      image: '/photogbackground.jpeg',
      alt: 'Photographer background',
    },
    {
      name: 'Dancers',
      popular: false,
      image: '/dancebackground.jpeg',
      alt: 'Dance background',
    },
    {
      name: 'Musicians',
      popular: false,
      image: '/musicbg.jpeg',
      alt: 'Music background',
    },
  ];

  const { user } = (await auth()) || {};

  const isLoggedIn = user !== undefined;

  return titles.map(
    (title: { name: string; popular: boolean; image: string; alt: string }) => (
      <Card key={title.name} sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          alt={title.alt}
          image={title.image}
          title={`${title.alt} Photo`}
          sx={{
            height: '100%',
            width: '100%',
            top: 0,
            right: 0,
            position: 'absolute',
          }}
        />
        <CardHeader
          title={
            <div className="flex items-center justify-between">
              <h4 className="text-white">{title.name}</h4>
              {title.popular && (
                <Chip
                  label="Most Searched"
                  className="bg-color-white"
                  color="secondary"
                />
              )}
            </div>
          }
          sx={{ position: 'relative' }}
        />

        <CardContent sx={{ position: 'relative' }}>
          <Button className="mt-4" href={`talent/${title.name.toLowerCase()}`}>
            <p className="text-white">
              {!isLoggedIn ? `Sign In to View ${title.name}` : 'View All'}
            </p>
          </Button>
        </CardContent>
      </Card>
    ),
  );
}
