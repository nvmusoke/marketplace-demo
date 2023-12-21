import Link from 'next/link';
import TitleCards from './ui/components/titleCards';

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 gap-8 p-6">
        <div className="grid grid-cols-1 gap-4 pt-40 md:grid-cols-2 lg:grid-cols-3">
          <TitleCards />
        </div>
      </main>
      <footer className="flex items-center justify-end space-x-4 p-6">
        <Link className="text-gray-600 hover:underline" href="#">
          About Us
        </Link>
        <Link className="text-gray-600 hover:underline" href="#">
          Contact
        </Link>
        <Link className="text-gray-600 hover:underline" href="#">
          Privacy Policy
        </Link>
      </footer>
    </div>
  );
}
