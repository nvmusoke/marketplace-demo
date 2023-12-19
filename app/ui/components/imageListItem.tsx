'use client';
import Link from 'next/link';
import {
  ImageListItem,
  ImageListItemBar,
  useTheme,
  ThemeProvider,
  createTheme,
} from '@mui/material';

const theme = createTheme({
  components: {
    MuiImageListItem: {
      styleOverrides: {
        img: {
          maxWidth: '25rem',
          maxHeight: '15rem',
        },
      },
    },
  },
});

export default function ImageListItems({
  hire,
}: {
  hire: {
    id: string;
    image_url: string;
    name: string;
    talent: string;
  };
}) {
  return (
    <ThemeProvider theme={theme}>
      <Link href={`/talent/${hire.id}`}>
        <ImageListItem>
          <img
            src={hire.image_url}
            alt={hire.name}
            loading="lazy"
            className={theme.img}
          />
          <ImageListItemBar
            title={hire.name}
            subtitle={<span> {hire.talent}</span>}
            position="below"
            className="text-white"
          />
        </ImageListItem>
      </Link>
    </ThemeProvider>
  );
}
