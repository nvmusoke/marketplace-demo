import Link from 'next/link';
import { Chip, Button, Card, CardContent, CardHeader } from '@mui/material';

export default function Component() {
  const titles = [
    { name: 'DJs', popular: true },
    { name: 'Bartenders', popular: true },
    { name: 'Videographers', popular: false },
    { name: 'Photographers', popular: false },
    { name: 'Dancers', popular: false },
    { name: 'Musicians', popular: false },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 gap-8 p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {titles.map((title: { name: string; popular: boolean }) => (
            <Card key={title.name}>
              <CardHeader
                title={
                  <div className="flex items-center justify-between">
                    <p>{title.name}</p>
                    {title.popular && <Chip label="Most Searched" />}
                  </div>
                }
              />

              <CardContent>
                <Button
                  className="mt-4"
                  href={`talent/${title.name.toLowerCase()}`}
                >
                  View All
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <footer className="flex items-center justify-end space-x-4 p-6">
        <Link className="text-gray-600 hover:underline" href="#">
          About Us
        </Link>
        <Link className="text-gray-600 hover:underline" href="#">
          Contact
        </Link>
        <Link className="text-gray-600 hover:underline" href="#">
          Privacy Policy
        </Link>
      </footer>
    </div>
  );
}
