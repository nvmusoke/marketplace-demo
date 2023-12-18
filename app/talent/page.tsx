import { Metadata } from 'next';
import { ImageList } from '@mui/material';
import { fetchHires } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import ImageListItems from '@/app/ui/components/imageListItem';

export const metadata: Metadata = {
  title: 'All Talent',
};

export default async function Page() {
  const [hires] = await Promise.all([fetchHires()]);
  if (!hires) {
    notFound();
  }

  return (
    <ImageList>
      {hires.map(
        (hire: {
          id: string;
          image_url: string;
          name: string;
          talent: string;
        }) => (
          <ImageListItems hire={hire} key={hire.id} />
        ),
      )}
    </ImageList>
  );
}
