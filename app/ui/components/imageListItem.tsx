'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ImageListItem, ImageListItemBar } from '@mui/material';
import { Rating } from '@mui/material';

export default function ImageListItems({
  hire,
  isMainPage,
}: {
  hire: {
    id: string;
    image_url: string;
    name: string;
    talent: string;
    rating: number;
  };
  isMainPage?: boolean;
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
          style={{ objectFit: 'contain', width: '400px', height: '240px' }}
        />
        <ImageListItemBar
          title={hire.name}
          subtitle={
            <>
              {isMainPage && <p> {hire.talent}</p>}
              <Rating value={hire.rating} precision={0.5} readOnly />
            </>
          }
          position="below"
          className="text-white"
        />
      </ImageListItem>
    </Link>
  );
}
