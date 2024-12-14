'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { trpc } from '../_trpc/client';
import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get('origin');

  // Call the authCallback procedure
  // frontend code for consuming the authCalback metod from the dashboard.tsx also
  const { data, isSuccess, error } = trpc.authCallback.useQuery();

  console.log(data?.success, error);

  // Effect to handle successful authentication
  useEffect(() => {
    console.log('here');

    if (isSuccess && data.success) {
      // User is synced to the database
      router.push(origin ? `/${origin}` : '/dashboard');
    }
  }, [isSuccess, data?.success]);

  // Effect to handle errors
  useEffect(() => {
    if (error) {
      // Handle unauthorized access
      if (error.data?.code === 'UNAUTHORIZED') {
        router.push('/sign-in');
      }
      // You can also handle other error codes here if necessary
    }
  }, [error, router]);
  return (
    <div className="w-full mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
        <h3 className="font-semibold text-xl">Setting up your account...</h3>
        <p>You will be redirected automatically.</p>
      </div>
    </div>
  );
};

export default Page;
