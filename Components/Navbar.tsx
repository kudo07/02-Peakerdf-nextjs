import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import { ArrowRight } from 'lucide-react';
import { buttonVariants } from './ui/button';
import Link from 'next/link';
import {
  RegisterLink,
  LoginLink,
} from '@kinde-oss/kinde-auth-nextjs/components';
const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/15 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <span className="text-orange-400">PeakerFD</span>
          </Link>
          <div className="hidden items-center space-x-y sm:flex">
            <>
              <Link
                href="/pricing"
                className={buttonVariants({ variant: 'ghost', size: 'sm' })}
              >
                Pricing
              </Link>
              <LoginLink
                className={buttonVariants({ variant: 'ghost', size: 'sm' })}
              >
                Sign In
              </LoginLink>
              <RegisterLink className={buttonVariants({ size: 'sm' })}>
                {' '}
                <span className="bg-orange-400 text-transparent inline-block bg-clip-text ">
                  Get Started
                </span>
                <ArrowRight className="ml-1.5 h-5 w-5 text-orange-400" />
              </RegisterLink>
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
