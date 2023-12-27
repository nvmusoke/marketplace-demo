'use client';
import { useState } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { Box, Button, TextField } from '@mui/material';
import Link from 'next/link';

export default function MessageForm({
  id,
  talent,
}: {
  id: string;
  talent: string;
}) {
  const [sentForm, setSentForm] = useState(false);
  const [subjectInput, setSubjectInput] = useState('');
  const [bodyInput, setBodyInput] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [bodyError, setBodyError] = useState('');

  const validateForm = () => {
    if (bodyInput.trim() === '') {
      setBodyError('Message Required');
      return false;
    }
    if (subjectInput.trim() === '') {
      setSubjectError('Subject Required');
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Form submitted successfully');
      setSentForm(true);
    }
  };

  return (
    <div>
      {sentForm ? (
        <div className="flex flex-col items-center">
          <p className="mb-4 text-white">
            Your message has been sent! Responses can take up to 48 hours.
          </p>
          <div>
            <Link className="mr-4 mt-4 text-white" href={`/talent/${id}`}>
              <Button variant="outlined" className="text-white">
                Return to Profile
              </Button>
            </Link>
            <Link className="mt-4 text-white" href={`/talent/${id}`}>
              <Button variant="outlined">{`Find more ${talent}s`}</Button>
            </Link>
          </div>
        </div>
      ) : (
        <form>
          <Box className="rounded border-2 border-solid border-violet-600 bg-blue-500 bg-gradient-to-br from-blue-500  to-violet-500 p-0  p-8">
            <div className="w-full">
              <div>
                <label
                  className="text-s font-large mb-3 mt-5 block text-gray-900"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <TextField
                  className="w-full max-w-xl rounded bg-white"
                  variant="outlined"
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  inputProps={{ style: { borderRadius: '.35rem' } }}
                  value={subjectInput}
                  onChange={(e) => {
                    setSubjectInput(e.target.value);
                    setSubjectError(''); // Clear the error message when the user types
                  }}
                  error={!!subjectError}
                />
                {subjectError && (
                  <div className="flex">
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                    <p className="text-sm text-red-500"> {subjectError}</p>
                  </div>
                )}
              </div>
              <div className="my-4">
                <label
                  className="text-s font-large mb-3 mt-5 block text-gray-900"
                  htmlFor="Message"
                >
                  Message
                </label>
                <TextField
                  className="w-full rounded bg-white"
                  multiline
                  name="body"
                  rows={4}
                  required
                  placeholder="Hello, I'd like to work with you..."
                  value={bodyInput}
                  onChange={(e) => {
                    setBodyInput(e.target.value);
                    setBodyError(''); // Clear the error message when the user types
                  }}
                  error={!!bodyError}
                />
                {bodyError && (
                  <div className="flex">
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                    <p className="text-sm text-red-500"> {bodyError}</p>
                  </div>
                )}
              </div>
            </div>
            <Button
              variant="contained"
              className="mt-4 bg-violet-600 text-white"
              onClick={() => {
                handleSubmit();
              }}
            >
              Send Message
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
}
