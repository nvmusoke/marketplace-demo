import { Metadata } from 'next';
import ImageList from '@mui/material/ImageList';
import Typography from '@mui/material/Typography';
import { fetchHireByTalent } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import ImageListItems from '@/app/ui/components/imageListItem';

export const metadata: Metadata = {
  title: 'Musicians',
};

export default async function Page() {
  const allMusicians = await fetchHireByTalent('musician');

  if (!allMusicians) {
    notFound();
  }
  return (
    <div className="p-10">
      <Typography variant="h2" className="pb-6 text-white">
        Available Musicians
      </Typography>
      <ImageList cols={3} gap={8}>
        {' '}
        {allMusicians.map(
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
