import Link from 'next/link';
import Button from '@mui/material/Button';
import Search from './search';
import { cookies } from 'next/headers';
import { signOut } from '@/auth';

export default async function Header() {
  const cookieStore = cookies();
  const isLoggedIn = cookieStore.has('authjs.session-token');

  return (
    <header className="flex items-center justify-between bg-gradient-to-r from-blue-500  to-violet-500 p-6 shadow-md">
      <Link href="/">
        <span className="ml-2 text-lg font-semibold">PartyStarters</span>
      </Link>
      <div className="flex items-center space-x-4">
        <Search placeholder="Search" />
        {!isLoggedIn ? (
          <>
            <Link href="/login">
              <Button variant="outlined" className="border-white text-white">
                Sign In
              </Button>
            </Link>
            <Button className="text-black">Sign Up</Button>
          </>
        ) : (
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
        )}
      </div>
    </header>
  );
}
