import { Metadata } from 'next';
import { ImageList, Typography } from '@mui/material';
import { fetchAllHires } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import ImageListItems from '@/app/ui/components/imageListItem';

export const metadata: Metadata = {
  title: 'All Talent',
};

export default async function Page() {
  const [hires] = await Promise.all([fetchAllHires()]);
  if (!hires) {
    notFound();
  }

  return (
    <div className="p-10">
      <Typography variant="h2" className="pb-6 text-white">
        All Available Talent
      </Typography>
      <ImageList cols={3} gap={8}>
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
    </div>
  );
}
