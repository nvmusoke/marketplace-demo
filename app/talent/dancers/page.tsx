import { Metadata } from 'next';
import ImageList from '@mui/material/ImageList';
import Typography from '@mui/material/Typography';
import { fetchHireByTalent } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import ImageListItems from '@/app/ui/components/imageListItem';

export const metadata: Metadata = {
  title: 'Dancers',
};

export default async function Page() {
  const allDancers = await fetchHireByTalent('dancer');

  if (!allDancers) {
    notFound();
  }
  return (
    <div className="p-10">
      <Typography variant="h2" className="pb-6 text-white">
        Available Dancers
      </Typography>
      <ImageList cols={3} gap={8}>
        {' '}
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
