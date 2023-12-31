import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Search from './search';
import { auth, signOut } from '@/auth';
import Image from 'next/image';

export default async function Header() {
  const { user } = (await auth()) || {};

  const isLoggedIn = user !== undefined;

  return (
    <header className="flex items-center justify-between bg-gradient-to-r from-blue-500  to-violet-500 p-6 shadow-md">
      <Link
        href={isLoggedIn ? '/home' : '/'}
        className="inline-flex items-center"
      >
        <Image
          src="/theMoveLogo.png"
          alt="the move makers logo"
          loading="lazy"
          width={80}
          height={80}
        />
        <Typography variant="h5" className="ml-2">
          The Move Makers
        </Typography>
      </Link>
      <div className="flex items-center space-x-4">
        {!isLoggedIn ? (
          <>
            <Link href="/login">
              <button className="rounded border border-solid border-white p-2 text-white hover:border-blue-800 hover:text-blue-800">
                <div className="hidden md:block">Sign In</div>
              </button>
            </Link>
            <button className="text-black hover:border-blue-800 hover:text-blue-800">
              <div className="hidden md:block">Sign Up</div>
            </button>
          </>
        ) : (
          <>
            <Search placeholder="Search" />
            <form
              action={async () => {
                'use server';
                await signOut();
              }}
            >
              <button className="rounded border border-solid border-black p-2 text-black hover:border-blue-400 hover:text-blue-400">
                <div className="hidden md:block">Sign Out</div>
              </button>
            </form>
          </>
        )}
      </div>
    </header>
  );
}
