'use client';
import { useState, useEffect, useRef } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { Avatar, Box, TextField } from '@mui/material';
import { UserIcon } from '@heroicons/react/24/outline';

export default function MessageForm() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [bodyInput, setBodyInput] = useState<string>('');
  const [bodyError, setBodyError] = useState<string>('');
  const [entries, setEntries] = useState<string[]>([]);

  const validateForm = () => {
    if (bodyInput.trim() === '') {
      setBodyError('Message Required');
      return false;
    }

    return true;
  };

  const handleSubmit = (e: any) => {
    if (validateForm()) {
      console.log('Form submitted successfully');
      e.preventDefault();
      setEntries((prevEntries) => [...prevEntries, bodyInput]);
      setBodyInput('');
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [entries]);

  return (
    <div>
      <form>
        <Box className="rounded border-2 border-solid border-violet-600 bg-blue-500 bg-gradient-to-br from-blue-500  to-violet-500 p-0  p-8">
          <div className="w-full">
            <div className="my-4">
              <Box
                className="mb-4 flex flex-col items-end overflow-scroll bg-white"
                height={300}
                maxHeight={300}
                sx={{ width: '100%' }}
              >
                {entries.map((entry, index) => (
                  <div key={index} className="inline-flex items-center">
                    <p className="m-2 w-fit rounded bg-gray-200 p-2 text-right">
                      {entry}
                    </p>
                    <Avatar sx={{ width: 24, height: 24 }}>
                      <UserIcon />
                    </Avatar>
                  </div>
                ))}
                <p ref={scrollRef} />
              </Box>

              <TextField
                className="w-full rounded bg-white ring-transparent drop-shadow-lg"
                multiline
                name="message"
                required
                placeholder="Hello, I'd like to work with you..."
                value={bodyInput}
                onChange={(e: any) => {
                  setBodyInput(e.target.value);
                  setBodyError(''); // Clear the error message when the user types
                }}
                sx={{
                  '& :focus': { '--tw-ring-color': 'none' },
                }}
                error={!!bodyError}
                onKeyDown={(e: any) => {
                  if (e.key === 'Enter') {
                    // Do code here
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
              />
              {bodyError && (
                <div className="flex">
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                  <p className="text-sm text-red-500"> {bodyError}</p>
                </div>
              )}
            </div>
          </div>
          <button
            className="mt-4 rounded border border-solid border-white p-2 text-white text-white  hover:bg-white hover:text-violet-900"
            onClick={(e: any) => {
              handleSubmit(e);
            }}
          >
            Send Message
          </button>
        </Box>
      </form>
    </div>
  );
}
