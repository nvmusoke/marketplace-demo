import Link from 'next/link';
import { Chip, Card, CardContent, CardHeader } from '@mui/material';

const links = [
  { name: 'DJs', popular: true },
  { name: 'Bartenders', popular: true },
  { name: 'Videographers', popular: false },
  { name: 'Photographers', popular: false },
  { name: 'Dancers', popular: false },
  { name: 'Musicians', popular: false },
];

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 gap-8 p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {links.map((link: { name: string; popular: boolean }) => (
            <Card key={link.name}>
              <CardHeader
                title={
                  <div className="flex items-center justify-between">
                    <p>{link.name}</p>
                    {link.popular && <Chip label="Most Searched" />}
                  </div>
                }
              />
              <CardContent>
                <Link
                  className="mt-4"
                  href={`talent/${link.name.toLowerCase()}s`}
                >
                  View All
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
