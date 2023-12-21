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
      {filteredHires.length === 0 ? (
        <div className="flex h-screen flex-col items-center justify-center">
          <div className="space-y-3">
            <Typography variant="h2" className="text-2xl text-white">
              No Results Found
            </Typography>
            <Typography variant="body1" className="text-white">
              We couldn&#39;t find any matches for your search.
            </Typography>
          </div>
        </div>
      ) : (
        <ImageList cols={3} gap={8}>
          {filteredHires.map(
            (hire: {
              id: string;
              image_url: string;
              name: string;
              talent: string;
              rating: number;
            }) => (
              <ImageListItems hire={hire} key={hire.id} isMainPage />
            ),
          )}
        </ImageList>
      )}
    </div>
  );
}
