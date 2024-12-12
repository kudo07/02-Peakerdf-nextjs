'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { trpc } from '../_trpc/client';
import { useEffect } from 'react';

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get('origin');
  const { data, isSuccess } = trpc.authCallback.useQuery(undefined);

  // Effect to handle success
  useEffect(() => {
    if (isSuccess && data.success) {
      // User is synced to db
      router.push(origin ? `/${origin}` : '/dashboard');
    }
  }, [isSuccess, data, origin, router]);
};

export default Page;
