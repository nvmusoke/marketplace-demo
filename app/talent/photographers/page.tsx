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
    <div className="p-10">
      <Typography variant="h2" className="pb-6 text-white">
        Available Photographers
      </Typography>
      <ImageList cols={3} gap={8}>
        {' '}
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
