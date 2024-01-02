import { fetchHireById } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/components/breadcrumbs';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Rating,
  Typography,
} from '@mui/material';

export const metadata: Metadata = {
  title: 'Profile',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const hireById = await fetchHireById(id);
  if (!hireById) {
    notFound();
  }
  const talent = hireById.talent;
  const firstLetter = talent.charAt(0);

  const firstLetterCap = firstLetter.toUpperCase();

  const remainingLetters = talent.slice(1);

  const capitalizedTalent = firstLetterCap + remainingLetters;

  return (
    <main className="flex-1 p-10">
      <Breadcrumbs
        breadcrumbs={[
          {
            label: `${capitalizedTalent}s`,
            href: `/talent/${talent.toLowerCase()}s`,
          },
          {
            label: hireById.name,
            href: `/talent/${hireById.id}`,
            active: true,
          },
        ]}
      />
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <Box
            component="img"
            className="mb-4 rounded border-2 border-solid border-violet-600 p-0"
            alt="The house from the offer."
            src={hireById.image_url}
          />
          <Card className="bg-gradient-to-br  from-blue-500 to-violet-500 p-6">
            <Typography variant="h4">{hireById.name}</Typography>

            <div className="mt-4">
              {hireById.external_link !== null && (
                <Link
                  href={`https://${hireById.external_link}`}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="mr-4 rounded border border-solid border-white p-2 text-white hover:bg-violet-600  hover:bg-white hover:text-violet-900"
                >
                  My Work
                </Link>
              )}

              <Link
                className="rounded border border-solid border-white p-2 text-white hover:bg-white hover:text-violet-900"
                href={`/talent/${hireById.id}/message`}
              >
                Message
              </Link>
            </div>
          </Card>
        </div>
        <div className="lg:col-span-2">
          <Card className="mb-3 p-6">
            <CardHeader
              title={
                <Typography variant="h4">{`About ${hireById.name}`}</Typography>
              }
            />
            <CardContent>
              <p>{hireById.bio}</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardContent>
              <div className="mb-8">
                <Typography className="mb-4" variant="h4">
                  Rating
                </Typography>
                <Rating
                  value={hireById.rating}
                  precision={0.1}
                  readOnly
                  size="large"
                />
                <p>{`(${hireById.rating} stars)`}</p>
              </div>
              <Divider className="mt-4" />
              <Typography variant="h4" className="mt-6">
                Reviews
              </Typography>
              <Typography variant="body1">{`"${hireById.bio}"`}</Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
