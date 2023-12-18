import { Metadata } from 'next';
import { ImageList, Typography } from '@mui/material';
import { fetchHireByTalent } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import ImageListItems from '@/app/ui/components/imageListItem';

export const metadata: Metadata = {
  title: 'Videographers',
};

export default async function Page() {
  const [allVideogs] = await Promise.all([fetchHireByTalent('videographer')]);
  if (!allVideogs) {
    notFound();
  }

  return (
    <div>
      <Typography variant="h2">All Videographers</Typography>
      <ImageList>
        {allVideogs.map(
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
    </div>
  );
}
