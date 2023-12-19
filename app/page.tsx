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
              <Button className="mt-4" href={'talent/djs'}>
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
              <Button className="mt-4" href={'talent/bartenders'}>
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
              <Button className="mt-4" href={'talent/dancers'}>
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
              <Button className="mt-4" href={'talent/photographers'}>
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
              <Button className="mt-4" href={'talent/musicians'}>
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
              <Button className="mt-4" href={'talent/videographers'}>
                View All
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="flex items-center justify-between p-6">
        <div className="flex items-center space-x-4">
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
