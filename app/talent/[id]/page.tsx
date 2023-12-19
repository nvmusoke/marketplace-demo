import { fetchHireById, fetchHireByTalent } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/components/breadcrumbs';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Box, Button, Card, CardContent, CardHeader } from '@mui/material';

export const metadata: Metadata = {
  title: 'Profile',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [hireById] = await Promise.all([fetchHireById(id)]);
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
            className="rounded p-0"
            alt="The house from the offer."
            src={hireById.image_url}
          />
          <Card className="p-6">
            <h2 className="text-xl font-bold">{hireById.name}</h2>
            <p className="text-gray-500">{hireById.email}</p>

            <div className="mt-4">
              <Button
                href={`mailto:${hireById.email}?subject=[PartyStarters] ${hireById.talent} gig&body=Hi ${hireById.name},%0D%0AAre you available [insert dates] for a ${hireById.talent} gig?"`}
              >
                Message
              </Button>
            </div>
          </Card>
        </div>
        <div className="lg:col-span-2">
          <Card className="p-6">
            <CardHeader
              title={<h2 className="text-xl font-bold">About Me</h2>}
            />
            <CardContent>
              <p className="mt-6">{hireById.bio}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}