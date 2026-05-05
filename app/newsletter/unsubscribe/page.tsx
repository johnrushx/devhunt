import Brand from '@/components/ui/Brand';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const metadata = {
  title: 'Unsubscribed from DevHunt',
  description: 'You have been unsubscribed from the DevHunt newsletter.',
};

export default function UnsubscribePage() {
  return (
    <section>
      <div className="min-h-[70vh] px-4 w-full flex items-center justify-center py-16">
        <div className="text-center max-w-xl">
          <Brand w="180" h="50" className="mx-auto" />
          <div className="mt-10 flex justify-center">
            <div className="rounded-full bg-emerald-500/10 p-4 ring-1 ring-emerald-500/25">
              <CheckCircleIcon className="w-14 h-14 text-emerald-400" aria-hidden />
            </div>
          </div>
          <h1 className="text-slate-50 text-2xl font-semibold mt-8">You&apos;re unsubscribed</h1>
          <p className="text-slate-300 mt-3 leading-relaxed">
            You&apos;ve successfully been removed from the DevHunt newsletter. You won&apos;t receive further marketing
            emails from us.
          </p>
          <p className="mt-8">
            <Link href="/" className="text-orange-500 hover:text-orange-400 font-medium underline underline-offset-2">
              Back to DevHunt
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
