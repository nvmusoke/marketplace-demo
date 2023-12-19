import { Metadata } from 'next';
import ImageList from '@mui/material/ImageList';
import Typography from '@mui/material/Typography';
import { fetchFilteredResults } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import ImageListItems from '@/app/ui/components/imageListItem';

export const metadata: Metadata = {
  title: 'All Talent',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';

  const filteredHires = await fetchFilteredResults(query);

  if (!filteredHires) {
    notFound();
  }
  return (
    <div className="p-10">
      <Typography variant="h2" className="pb-6 text-white">
        {query !== '' ? `Results matching ${query}` : 'All Available Talent'}
      </Typography>
      <ImageList cols={3} gap={8}>
        {filteredHires.map(
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
