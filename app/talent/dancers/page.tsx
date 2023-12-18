import { Metadata } from 'next';
import { ImageList, Typography } from '@mui/material';
import { fetchHireByTalent } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import ImageListItems from '@/app/ui/components/imageListItem';

export const metadata: Metadata = {
  title: 'Dancers',
};

export default async function Page() {
  const [allDancers] = await Promise.all([fetchHireByTalent('dancer')]);

  if (!allDancers) {
    notFound();
  }
  return (
    <div>
      <Typography variant="h2">Available Dancers</Typography>
      <ImageList>
        {allDancers.map(
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
