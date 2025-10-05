import React, { useState } from 'react';

import Image from 'next/image';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { MessageSquare } from 'lucide-react';

import { DiscussionOut } from '@/api/schemas';

import RenderParsedHTML from '../common/RenderParsedHTML';
import { BlockSkeleton, Skeleton, TextSkeleton } from '../common/Skeleton';
import DiscussionComments from './DiscussionComments';

interface DiscussionCardProps {
  discussion: DiscussionOut;
  handleDiscussionClick: (id: number) => void;
}

const DiscussionCard: React.FC<DiscussionCardProps> = ({ discussion, handleDiscussionClick }) => {
  dayjs.extend(relativeTime);

  const [displayComments, setDisplayComments] = useState<boolean>(false);

  // Reactions feature will be added later

  return (
    <div
      key={discussion.id}
      className="rounded-xl border-common-contrast res-text-sm sm:border sm:bg-common-cardBackground sm:p-4"
    >
      <div className="flex w-full items-start justify-between">
        <div className="flex w-full flex-col gap-2">
          <div className="flex items-center">
            <Image
              src={
                discussion.user.profile_pic_url
                  ? discussion.user.profile_pic_url?.startsWith('http')
                    ? discussion.user.profile_pic_url
                    : `data:image/png;base64,${discussion.user.profile_pic_url}`
                  : `/images/assets/user-icon.png`
              }
              alt={discussion.user.username}
              width={32}
              height={32}
              className="mr-2 aspect-square h-7 w-7 rounded-full md:h-8 md:w-8"
            />
            <div>
              <span className="text-sm font-semibold text-text-secondary">
                {discussion.user.username}
              </span>
              <span className="ml-2 text-xs text-text-tertiary">
                • {dayjs(discussion.created_at).fromNow()}
              </span>
            </div>
          </div>
          <div className="flex w-full flex-col gap-2">
            <span
              className="line-clamp-2 flex-grow cursor-pointer font-semibold text-text-primary res-text-sm hover:text-functional-blue hover:underline"
              onClick={() => setDisplayComments((prev) => !prev)}
            >
              {discussion.topic}
            </span>
            <div className="">
              <RenderParsedHTML
                rawContent={discussion.content}
                isShrinked={true}
                containerClassName="mb-2"
                supportMarkdown={true}
                supportLatex={true}
              />
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs text-text-tertiary">
            <button
              className="mr-4 flex cursor-pointer items-center space-x-1 hover:underline"
              onClick={() => setDisplayComments((prev) => !prev)}
            >
              <MessageSquare size={14} />
              <span>{discussion.comments_count} comments</span>
            </button>
          </div>
        </div>
      </div>
      {displayComments && <DiscussionComments discussionId={Number(discussion.id)} />}
    </div>
  );
};

export default DiscussionCard;

export const DiscussionCardSkeleton: React.FC = () => {
  return (
    <Skeleton className="rounded-xl border border-common-contrast bg-common-cardBackground p-4">
      <div className="flex items-center gap-2">
        <BlockSkeleton className="aspect-square h-7 w-8 shrink-0 rounded-full md:h-8 md:w-8" />
        <TextSkeleton className="w-40" />
      </div>
      <TextSkeleton className="w-full" />
      <TextSkeleton className="w-3/4" />
      <div className="flex items-center gap-6">
        <TextSkeleton className="w-20" />
        <TextSkeleton className="w-20" />
      </div>
    </Skeleton>
  );
};
