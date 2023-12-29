import { fetchHireById, fetchHireByTalent } from '@/app/lib/data';
import { KeyIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';
import { notFound } from 'next/navigation';
import { Box, TextField } from '@mui/material';
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
        <MessageForm id={id} talent={hireById.talent} />
      </div>
    </div>
  );
}
