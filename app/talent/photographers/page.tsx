import { Metadata } from 'next';
import { ImageList, Typography } from '@mui/material';
import { notFound } from 'next/navigation';
import ImageListItems from '@/app/ui/components/imageListItem';
import { fetchHireByTalent } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Photographers',
};

export default async function Page() {
  const [allPhotogs] = await Promise.all([fetchHireByTalent('photographer')]);
  if (!allPhotogs) {
    notFound();
  }

  return (
    <div>
      <Typography variant="h2">Available Photographers</Typography>
      <ImageList>
        {allPhotogs.map(
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
