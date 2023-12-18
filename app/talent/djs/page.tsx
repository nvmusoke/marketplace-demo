import { Metadata } from 'next';
import { ImageList, Typography } from '@mui/material';
import { fetchHireByTalent } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import ImageListItems from '@/app/ui/components/imageListItem';

export const metadata: Metadata = {
  title: 'DJs',
};

export default async function Page() {
  const [allDJs] = await Promise.all([fetchHireByTalent('DJ')]);

  if (!allDJs) {
    notFound();
  }
  return (
    <div>
      <Typography variant="h2">Available DJs</Typography>
      <ImageList>
        {allDJs.map(
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
