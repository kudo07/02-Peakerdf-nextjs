'use client';
import { trpc } from '@/app/_trpc/client';
import { useState } from 'react';
import UploadButton from './UploadButton';
import Link from 'next/link';
import { GhostIcon, Loader2, MessageSquare, Plus, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from './ui/button';
import Skeleton from 'react-loading-skeleton';

// import UploadButton from './UploadButton';
const Dashboard = () => {
  const [currentlyDeletingFile, setCurrentlyDeletingFile] = useState<
    string | null
  >(null);
  const utils = trpc.useUtils();
  // consume the api endpoint from the trpc in the index.ts
  // get the user file from the trpc==> index.ts endpoint where trpc knows the type of data
  const { data: files, isLoading } = trpc.getUserFiles.useQuery();
  // get the deletefile endpoint
  const deleteFileMutation = trpc.deleteFile.useMutation();
  // trpc is from the client where  it bounds to the approuter from the trpc==>index.ts endpoints where we fetch the data from the backend databse
  // trpc then use the private procedure for only delete the authenticated user by middleware where ctx getting the user.id and user from the trpc.ts

  // clicke the handle delete button
  const handleDelete = async (fileId: string) => {
    setCurrentlyDeletingFile(fileId);
    try {
      await deleteFileMutation.mutateAsync({ id: fileId });
      // when we hover on the deleteMutations trpc let it know the type of the data
      utils.getUserFiles.invalidate(); //refresh the cache or page after delete it the page is refresh
    } catch (error) {
      console.log('failed to delete file:', error);
    } finally {
      setCurrentlyDeletingFile(null);
    }
  };
  return (
    <main className="mx-auto max-w-7xl md:p-10">
      <div className="mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0">
        <h1 className="mb-3 font-bod text-6xl text-slate-800">MY FILES</h1>
        <UploadButton />
      </div>

      {/* display all the users files */}
      {files && files?.length !== 0 ? (
        <ul className="mt-8 grid grid-cols-1 divide-y divide-zinc-200 md:grid-cols-2 lg:grid-cols-3">
          {files
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .map((file) => (
              <li
                key={file.id}
                className="cols-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow transition hover:shadow-lg"
              >
                <Link
                  href={`/dashboard/${file.id}`}
                  className="flex flex-col gap-2"
                >
                  <div className="pt-6 px-6 flex w-full items-center justify-between space-x-6">
                    <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-b from-orange-400 to-rose-600" />
                    <div className="flex-1 truncate">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-lg font-medium text-zinc-900">
                          {file.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>

                <div className="px-6 mt-4 grid grid-cols-3 place-items-center py-2 gap-6 text-xs text-zinc-500">
                  {/* 1 */}

                  <div className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    {format(new Date(file.createdAt as string), 'MMM yyyy')}
                  </div>
                  {/* 2 */}
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    mocked
                  </div>

                  {/* button */}
                  <Button
                    onClick={() => handleDelete(file.id)}
                    size="sm"
                    className="w-full"
                    variant="destructive"
                  >
                    {currentlyDeletingFile === file.id ? (
                      <Loader2 className="h4- w-4 animate-spin" />
                    ) : (
                      <Trash2 className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </li>
            ))}
        </ul>
      ) : isLoading ? (
        <Skeleton height={100} className="my-2" count={8} />
      ) : (
        <div className="mt-16 flex flex-col items-center gap-2">
          <GhostIcon className="h-8 w-8 text-zinc-800" />
          <h3 className="font-semibold text-xl">Pretty empty around here</h3>
          <p>Let&apos;s upload your files PDF</p>
        </div>
      )}
    </main>
  );
};

export default Dashboard;
