import Link from 'next/link';
import { Button } from '@mui/material';
import Search from './search';
// import { signOut } from '@/auth';

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-gradient-to-r from-blue-500  to-violet-500 p-6 shadow-md">
      <Link href="/">
        <span className="ml-2 text-lg font-semibold">PartyStarters</span>
      </Link>
      <div className="flex items-center space-x-4">
        <Search placeholder="Search" />
        <Button variant="outlined">Sign In</Button>
        <Button>Sign Up</Button>
      </div>
    </header>
  );
}
