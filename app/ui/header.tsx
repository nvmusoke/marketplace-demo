import Link from 'next/link';
import Button from '@mui/material/Button';
import Search from './search';
import { auth, signOut } from '@/auth';

export default async function Header() {
  const { user } = (await auth()) || {};

  const isLoggedIn = user !== undefined;

  return (
    <header className="flex items-center justify-between bg-gradient-to-r from-blue-500  to-violet-500 p-6 shadow-md">
      <Link href={isLoggedIn ? '/home' : '/'}>
        <h2 className="ml-2">
          TheMove Makers
        </h2>
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
