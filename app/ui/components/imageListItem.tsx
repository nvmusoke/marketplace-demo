'use client';
import Link from 'next/link';
import { ImageListItem, ImageListItemBar } from '@mui/material';

export default function ImageListItems({
  hire,
}: {
  hire: {
    id: string;
    image_url: string;
    name: string;
    talent: string;
  };
}) {
  return (
    <Link href={`/talent/${hire.id}`}>
      <ImageListItem>
        <img
          srcSet={`${hire.image_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
          src={`${hire.image_url}?w=248&fit=crop&auto=format`}
          alt={hire.name}
          loading="lazy"
        />
        <ImageListItemBar
          title={hire.name}
          subtitle={<span> {hire.talent}</span>}
          position="below"
        />
      </ImageListItem>
    </Link>
  );
}
