'use client';

import { LoginWidget } from '@/components/LoginWidget';
import { MarketingContainer } from '@/components/MarketingContainer';
import { useIsLoggedIn } from '@/hooks/use-is-logged-in';
import { InternalApi } from '@/lib/api';
import { PlusIcon } from '@heroicons/react/16/solid';
import { Button } from '@tryglow/ui';

const tiers = [
  {
    name: 'Premium',
    id: 'premium',
    description: 'The best way to get started.',
    priceMonthly: '$4',
    href: '#',
    highlights: [
      { description: 'Custom domains' },
      { description: 'Unlimited blocks' },
      { description: 'Unlimited pages' },
      { description: 'Premium only blocks' },
      { description: 'Verification badge' },
      { description: 'Private pages' },
    ],
  },
  {
    name: 'Team',
    id: 'team',
    description: 'Built for teams.',
    priceMonthly: '$10',
    href: '#',
    highlights: [
      { description: 'A team with unlimited pages/blocks' },
      { description: 'Invite up to 5 team members' },
      { description: 'Google Analytics integration' },
      { description: 'Facebook Pixel integration' },
    ],
  },
];

export function PricingTable() {
  const handleGetPlan = async (planType: 'premium' | 'team') => {
    try {
      const req = await InternalApi.get(
        `/billing/checkout/get-checkout-link?planType=${planType}`
      );

      if (req.checkoutLink) {
        window.open(req.checkoutLink, '_blank');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const isLoggedIn = useIsLoggedIn();

  return (
    <div className="relative pt-16 sm:pt-16 pb-16">
      <div className="absolute inset-x-0 bottom-0 top-48 bg-gradient-to-b from-white to-stone-100" />
      <MarketingContainer className="relative z-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="-m-2 grid grid-cols-1 rounded-[2rem] shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md"
            >
              <div className="grid grid-cols-1 rounded-[2rem] p-2 shadow-md shadow-black/5">
                <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
                  <h2 className="text-2xl font-black text-[#FF4F17]">
                    {tier.name} <span className="sr-only">plan</span>
                  </h2>
                  <p className="mt-2 text-pretty text-sm/6 text-gray-600">
                    {tier.description}
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="text-5xl font-black tracking-tight text-gray-950">
                      {tier.priceMonthly}
                    </div>
                    {tier.name !== 'Free' && (
                      <div className="text-sm/5 text-gray-600">
                        <p>USD</p>
                        <p>per month</p>
                      </div>
                    )}
                  </div>
                  <div className="mt-8">
                    {isLoggedIn && tier.id !== 'free' ? (
                      <Button
                        size="lg"
                        className="w-full"
                        onClick={() =>
                          handleGetPlan(tier.id as 'premium' | 'team')
                        }
                      >
                        {tier.name === 'Premium'
                          ? 'Try free for 14 days'
                          : tier.name === 'Team'
                            ? 'Get Team'
                            : 'Get Started'}
                      </Button>
                    ) : (
                      <LoginWidget
                        isSignup
                        trigger={
                          <Button size="lg" className="w-full">
                            {tier.name === 'Team' ? 'Get Team' : 'Get Started'}
                          </Button>
                        }
                      />
                    )}
                  </div>
                  <div className="mt-8">
                    <h3 className="text-sm/6 font-medium text-gray-950">
                      {tier.name === 'Team' && 'Everything in Premium plus:'}
                    </h3>
                    <ul className="mt-3 space-y-3">
                      {tier.highlights.map((highlight) => (
                        <li
                          key={highlight.description}
                          className="group flex items-start gap-4 text-sm/6 text-gray-600 data-[disabled]:text-gray-400"
                        >
                          <span className="inline-flex h-6 items-center">
                            <PlusIcon
                              aria-hidden="true"
                              className="size-4 fill-gray-400 group-data-[disabled]:fill-gray-300"
                            />
                          </span>

                          {highlight.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MarketingContainer>
    </div>
  );
}
