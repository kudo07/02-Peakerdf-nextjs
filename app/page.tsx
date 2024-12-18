import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Quattrocento } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
const font = Quattrocento({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});
export default function Home() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="ml-40  relative  left-[calc(100%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/8 -translate-y-1/4 rotate-[30deg] bg-gradient-to-tr from-[#ff8c00] to-[#ff0044] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      {/* design */}
      {/* code Maxwrapper  */}

      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full boder border-gray-400 bg-slate-100 px-7 py-2 shadow-md backdrop-blur transition-all hover:boder-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">
            PeakerDF is Now public!
          </p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Chat with your <span className="text-orange-400"> documents </span>
          in seconds.
        </h1>
        <p
          className={cn(
            'mt-5 max-w-porse text-gray-400 sm:text-lg',
            font.className
          )}
        >
          PeakerDF allows yout to have conversations with any PDF document.
          Simply upload your file and start asking questions right away
        </p>
        <Link
          href="/dashboard"
          target="_blank"
          className={buttonVariants({ size: 'lg', className: 'mt-5' })}
        >
          <span className="text-orange-400">Get Started</span>
          <ArrowRight className="text-orange-400 ml-2 h-5 w-5" />
        </Link>
      </MaxWidthWrapper>
      {/* value proposition */}
      <div>
        {/* design */}
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] ml-16 -translate-x-1/7 -translate-y-1/8 rotate-[30deg] bg-gradient-to-tr from-[#ff9532] to-[#ff0000] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          {/* design */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffa639] to-[#ff0000] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          {/* design */}
          {/* image */}
          <div>
            <div className="mx-auto max-w-6xl px-8 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 ">
                  <Image
                    src="/dashboard-preview.jpg"
                    alt="product-preview.jpg"
                    width={1364}
                    height={866}
                    quality={100}
                    className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/8 -translate-y-1/2  rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-10 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>

      {/* feature section */}
      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
              Start Chatting in Minutes
            </h2>
            <p className={cn('mt-4 text-lg text-gray-600', font.className)}>
              Chatting to Your PDF Files has never been easier than with Quill
            </p>
          </div>
        </div>
        {/* Steps */}
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-400 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pt-4">
              <span className="text-sm font-medium text-orange-400">
                Step 1
              </span>
              <span className="text-xl font-semibold">
                Sign up form an account
              </span>
              <span className={cn('mt-2 text-zinc-700', font.className)}>
                Either starting out with a free plan or chose{' '}
                <Link
                  href="/pricing"
                  className="text-orange-400 underline underline-offset-2"
                >
                  pro plan
                </Link>
                .
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-400 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-orange-400">
                Step-2
              </span>
              <span className="text-xl font-semibold">
                Upload your PDF file
              </span>
              <span className={cn('mt-2 text-zinc-700', font.className)}>
                We&apos;ll process your file and make it ready for you to chat
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-400 py-2 pl-4 md:border-l-0 md:border-t-2 md:bp-0 md:pl-0 md:pt-4">
              <span className="text-sm font-meduim text-orange-400">
                Step-3
              </span>
              <span className="text-xl font-semibold">
                Start asking questions
              </span>
              <span className={cn('mt-2 text-zinc-700', font.className)}>
                It&apos;s that simple. Tru out PeakerDF today - it really takes
                than a minute.
              </span>
            </div>
          </li>
        </ol>
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src="/file-upload-preview.jpg"
                alt="uploading preview"
                width={1419}
                height={732}
                quality={100}
                className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="mt-96 pt-96 pointer-events-none absolute  inset-x-0 top-96 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-100"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className=" relative mb-44 left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/6 -translate-y-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff9500] to-[#ff0000] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="mt-96 pt-96 pointer-events-none absolute  inset-x-0 top-96 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-100"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mb-96 relative  left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/8 translate-y-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff00ee] to-[#ff0000] opacity-10  ml-96 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
    </>
  );
}
