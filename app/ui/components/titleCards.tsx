'use client';
import {
  Chip,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';

export default function TitleCards({ isLoggedIn }: { isLoggedIn?: boolean }) {
  return (
    <>
      {titles.map(
        (title: {
          name: string;
          popular: boolean;
          image: string;
          alt: string;
        }) => (
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
                  <Typography
                    variant="h4"
                    className="text-white"
                    sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}
                  >
                    {title.name}
                  </Typography>
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
              <Button
                className="mt-4"
                href={`talent/${title.name.toLowerCase()}`}
              >
                <Typography
                  variant="body1"
                  className="text-white"
                  sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}
                >
                  {!isLoggedIn ? `Sign In to View ${title.name}` : 'View All'}
                </Typography>
              </Button>
            </CardContent>
          </Card>
        ),
      )}
    </>
  );
}

export const titles = [
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
