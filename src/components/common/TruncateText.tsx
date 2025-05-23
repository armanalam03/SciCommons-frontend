import React, { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

const TruncateText = ({
  text,
  maxLines,
  hideButton = false,
  isHTML = false,
  textClassName,
}: {
  text: string;
  maxLines: number;
  hideButton?: boolean;
  isHTML?: boolean;
  textClassName?: string;
}) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkTruncation = () => {
      if (textRef.current) {
        const lineHeight = parseInt(window.getComputedStyle(textRef.current).lineHeight);
        const maxHeight = lineHeight * maxLines;
        setIsTruncated(textRef.current.scrollHeight > maxHeight);
      }
    };

    checkTruncation();
    window.addEventListener('resize', checkTruncation);
    return () => window.removeEventListener('resize', checkTruncation);
  }, [maxLines, text]);

  const contentProps = isHTML ? { dangerouslySetInnerHTML: { __html: text } } : { children: text };

  return (
    <div>
      <span
        ref={textRef}
        className={cn('text-text-primary', textClassName, {
          'overflow-hidden': !isExpanded && isTruncated,
        })}
        style={{
          display: '-webkit-box',
          WebkitLineClamp: !isExpanded && isTruncated ? maxLines : 'unset',
          WebkitBoxOrient: 'vertical',
        }}
        {...contentProps}
      />
      {isTruncated && !hideButton && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-1 text-functional-blue res-text-xs hover:underline"
        >
          {isExpanded ? 'Read less' : 'Read more'}
        </button>
      )}
    </div>
  );
};

export default TruncateText;
