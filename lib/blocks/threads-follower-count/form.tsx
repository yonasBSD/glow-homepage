import Link from 'next/link';
import { useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';

import { InitialDataUsersIntegrations } from '@/app/[domain]/[slug]/page';

import { InstagramLatestPostBlockConfig } from '@/lib/blocks/instagram-latest-post/config';
import { EditFormProps } from '@/lib/blocks/types';

import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { captureException } from '@sentry/nextjs';

const ThreadsLogo = () => {
  return (
    <svg fill="#000" width={32} height={32} viewBox="0 0 192 192">
      <path d="M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.548 21.348-10.548h.229c8.249.053 14.474 2.452 18.503 7.129 2.932 3.405 4.893 8.111 5.864 14.05-7.314-1.243-15.224-1.626-23.68-1.14-23.82 1.371-39.134 15.264-38.105 34.568.522 9.792 5.4 18.216 13.735 23.719 7.047 4.652 16.124 6.927 25.557 6.412 12.458-.683 22.231-5.436 29.049-14.127 5.178-6.6 8.453-15.153 9.899-25.93 5.937 3.583 10.337 8.298 12.767 13.966 4.132 9.635 4.373 25.468-8.546 38.376-11.319 11.308-24.925 16.2-45.488 16.351-22.809-.169-40.06-7.484-51.275-21.742C35.236 139.966 29.808 120.682 29.605 96c.203-24.682 5.63-43.966 16.133-57.317C56.954 24.425 74.204 17.11 97.013 16.94c22.975.17 40.526 7.52 52.171 21.847 5.71 7.026 10.015 15.86 12.853 26.162l16.147-4.308c-3.44-12.68-8.853-23.606-16.219-32.668C147.036 9.607 125.202.195 97.07 0h-.113C68.882.194 47.292 9.642 32.788 28.08 19.882 44.485 13.224 67.315 13.001 95.932L13 96v.067c.224 28.617 6.882 51.447 19.788 67.854C47.292 182.358 68.882 191.806 96.957 192h.113c24.96-.173 42.554-6.708 57.048-21.189 18.963-18.945 18.392-42.692 12.142-57.27-4.484-10.454-13.033-18.945-24.723-24.553ZM98.44 129.507c-10.44.588-21.286-4.098-21.82-14.135-.397-7.442 5.296-15.746 22.461-16.735 1.966-.114 3.895-.169 5.79-.169 6.235 0 12.068.606 17.371 1.765-1.978 24.702-13.58 28.713-23.802 29.274Z" />
    </svg>
  );
};

export function EditForm({}: EditFormProps<InstagramLatestPostBlockConfig>) {
  const [showConfirmDisconnect, setShowConfirmDisconnect] = useState(false);
  const { data: usersIntegrations } = useSWR<InitialDataUsersIntegrations>(
    '/api/user/integrations'
  );

  const { mutate } = useSWRConfig();

  const threadsIntegrations = usersIntegrations?.filter(
    (integration) => integration.type === 'threads'
  );

  const handleDisconnect = async () => {
    if (!threadsIntegrations || threadsIntegrations?.length === 0) {
      return;
    }

    try {
      const response = await fetch('/api/services/disconnect', {
        method: 'POST',
        body: JSON.stringify({
          integrationId: threadsIntegrations[0].id,
        }),
      });

      if (response.ok) {
        toast({
          title: 'Integration disconnected',
        });

        mutate('/api/user/integrations');
      }
    } catch (error) {
      captureException(error);
      toast({
        title: 'Error disconnecting integration',
        description: 'Please try again later.',
      });
    }
  };

  if (!threadsIntegrations || threadsIntegrations?.length === 0) {
    return (
      <div className="bg-stone-100 rounded-md flex flex-col items-center text-center px-4 py-8">
        <div className="bg-stone-200 rounded-md w-14 h-14 flex items-center justify-center">
          <ThreadsLogo />
        </div>
        <span className="font-medium text-lg text-stone-800 mt-3">
          Connect your Threads Account
        </span>
        <span className="font-normal text-stone-600 mt-1">
          To get started, you&apos;ll need to connect your Threads account to
          your page.
        </span>

        <Button asChild className="mt-4">
          <Link href="/api/services/threads" prefetch={false} target="_blank">
            Connect Threads
          </Link>
        </Button>
      </div>
    );
  }

  const connectedSince = threadsIntegrations[0].createdAt;

  return (
    <>
      <div className="bg-stone-100 rounded-md flex flex-col items-center text-center px-4 py-8">
        <div className="bg-stone-200 rounded-md w-14 h-14 flex items-center justify-center">
          <ThreadsLogo />
        </div>
        <span className="font-medium text-lg text-stone-800 mt-3">
          Connected
        </span>
        <span className="font-normal text-stone-600 mt-1">
          Your Threads account was connected on{' '}
          {new Date(connectedSince).toLocaleDateString()}
        </span>

        {!showConfirmDisconnect && (
          <Button
            onClick={() => setShowConfirmDisconnect(true)}
            className="mt-4"
          >
            Disconnect Account
          </Button>
        )}
        {showConfirmDisconnect && (
          <div className="flex gap-2 mt-4">
            <Button onClick={handleDisconnect}>Are you sure?</Button>
            <Button
              variant="outline"
              onClick={() => setShowConfirmDisconnect(false)}
            >
              Cancel
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
