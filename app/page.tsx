import Link from 'next/link';
import {
  Chip,
  Button,
  Card,
  CardContent,
  CardHeader,
  Input,
} from '@mui/material';
//  import { CardTitle } from "@/components/ui/card"
//  import { AvatarImage, Avatar } from "@/components/ui/avatar"

const links = [
  { name: 'DJs', href: '/talent/djs' },
  { name: 'Video', href: '/talent/video' },
  { name: 'DJs', href: '/talent/djs' },
  { name: 'DJs', href: '/talent/djs' },
  { name: 'DJs', href: '/talent/djs' },
  { name: 'DJs', href: '/talent/djs' },
];

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 gap-8 p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader
              title={
                <div className="flex items-center justify-between">
                  <p>DJs</p>
                  <Chip label="Most Searched" />
                </div>
              }
            />

            <CardContent>
              <Button className="mt-4" size="sm" href={'talent/djs'}>
                View All
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader
              title={
                <div className="flex items-center justify-between">
                  <p>Bartenders</p>
                  <Chip label="Most Searched" />
                </div>
              }
            />
            <CardContent>
              <Button className="mt-4" size="sm" href={'talent/bartenders'}>
                View All
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader
              title={
                <div className="flex items-center justify-between">
                  <p>Dancers</p>
                </div>
              }
            />
            <CardContent>
              <Button className="mt-4" size="sm" href={'talent/dancers'}>
                View All
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader
              title={
                <div className="flex items-center justify-between">
                  <p>Photographers</p>
                </div>
              }
            />
            <CardContent>
              <Button className="mt-4" size="sm" href={'talent/photographers'}>
                View All
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader
              title={
                <div className="flex items-center justify-between">
                  <p>Musicians</p>
                </div>
              }
            />
            <CardContent>
              <Button className="mt-4" size="sm" href={'talent/musicians'}>
                View All
              </Button>
            </CardContent>
          </Card>{' '}
          <Card>
            <CardHeader
              title={
                <div className="flex items-center justify-between">
                  <p>Videographers</p>
                </div>
              }
            />
            <CardContent>
              <Button className="mt-4" size="sm" href={'talent/videographers'}>
                View All
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="flex items-center justify-between bg-gray-200 p-6">
        <div className="flex items-center space-x-4">
          <StoreIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">PartyStarters</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link className="text-gray-600 hover:underline" href="#">
            About Us
          </Link>
          <Link className="text-gray-600 hover:underline" href="#">
            Contact
          </Link>
          <Link className="text-gray-600 hover:underline" href="#">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}

function StoreIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
    </svg>
  );
}
