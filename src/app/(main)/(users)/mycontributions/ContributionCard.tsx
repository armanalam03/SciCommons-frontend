import React from 'react';

import { BlockSkeleton } from '@/components/common/Skeleton';
import { Skeleton } from '@/components/common/Skeleton';

interface ContributionCardProps {
  icon: React.FC;
  title: string;
  count: number | undefined | null;
  description: string;
}

const ContributionCard: React.FC<ContributionCardProps> = ({
  icon: Icon,
  title,
  count,
  description,
}) => (
  <div className="flex items-start gap-4 rounded-lg border border-common-contrast bg-common-cardBackground p-4">
    <div className="h-5 w-5 text-functional-blue">
      <Icon />
    </div>
    <div className="w-full">
      <div className="flex items-start justify-between sm:flex-col">
        <h3 className="text-base font-semibold text-text-primary">{title}</h3>
        <p className="text-2xl font-bold text-functional-blue">{count}</p>
      </div>
      <p className="mt-1 text-xs text-text-tertiary">{description}</p>
    </div>
  </div>
);

export default ContributionCard;

export const ContributionCardSkeleton: React.FC = () => (
  <Skeleton className="flex w-full flex-row items-start gap-4 rounded-xl border border-common-contrast bg-common-cardBackground">
    <BlockSkeleton className="h-5 w-5 shrink-0 overflow-x-hidden rounded-full" />
    <div className="flex flex-col gap-2">
      <BlockSkeleton className="h-4 w-28" />
      <BlockSkeleton className="h-6 w-20" />
      <BlockSkeleton className="h-4 w-32" />
    </div>
  </Skeleton>
);
