import type { Metadata } from "next";


export const metadata = {
  title: 'My Next.js App',
  description: 'App Router ve TypeScript ile Bootstrap',
};

export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }

  