'use client';
import Link from 'next/link';
import Image from 'next/image';
import {
  ImageListItem,
  ImageListItemBar,
} from '@mui/material';


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
          <Image
            src={hire.image_url}
            alt={hire.name}
            loading="lazy"
            width={400}
            height={240}
            sizes="(max-height: 240px)"
          />
          <ImageListItemBar
            title={hire.name}
            subtitle={<span> {hire.talent}</span>}
            position="below"
            className="text-white"
          />
        </ImageListItem>
      </Link>
  );
}
