'use client';

import { useParams } from 'next/navigation';

import { Pencil } from 'lucide-react';

import Sidebar from '@/components/common/Sidebar';

export default function ArticleAuthorLayout({ children }: { children: React.ReactNode }) {
  const params = useParams<{ slug: string }>();
  const links = [
    {
      href: `/article/${params?.slug}/settings`,
      label: 'Edit',
      icon: <Pencil className="mr-3" />,
    },
  ];
  return (
    <div className="relative flex">
      <Sidebar baseHref={`/article/${params?.slug}`} links={links} />
      <main className="mt-6 flex-1 p-4 md:ml-64 md:mt-0 md:pl-4">{children}</main>
    </div>
  );
}
