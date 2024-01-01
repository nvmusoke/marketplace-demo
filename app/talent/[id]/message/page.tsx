import { fetchHireById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Box } from '@mui/material';
import MessageForm from '@/app/ui/message-form';
import Breadcrumbs from '@/app/ui/components/breadcrumbs';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const hireById = await fetchHireById(id);

  if (!hireById) {
    notFound();
  }
  return (
    <div className="grid flex-1 gap-6 p-10 lg:grid-cols-3">
      <div className="lg:col-span-1">
        <Breadcrumbs
          breadcrumbs={[
            {
              label: hireById.name,
              href: `/talent/${hireById.id}`,
            },
            {
              label: 'Message',
              href: `/talent/${hireById.id}/message`,
              active: true,
            },
          ]}
        />
        <Box
          component="img"
          className="rounded border-2 border-solid border-violet-600 p-0"
          alt="The house from the offer."
          src={hireById.image_url}
        />
      </div>
      <div className="pt-14 lg:col-span-2">
        <MessageForm />
      </div>
    </div>
  );
}
