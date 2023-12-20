import { Chip, Button, Card, CardContent, CardHeader } from '@mui/material';

export default function TitleCards() {
  const titles = [
    { name: 'DJs', popular: true },
    { name: 'Bartenders', popular: true },
    { name: 'Videographers', popular: false },
    { name: 'Photographers', popular: false },
    { name: 'Dancers', popular: false },
    { name: 'Musicians', popular: false },
  ];

  return titles.map((title: { name: string; popular: boolean }) => (
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
        <Button className="mt-4" href={`talent/${title.name.toLowerCase()}`}>
          View All
        </Button>
      </CardContent>
    </Card>
  ));
}
