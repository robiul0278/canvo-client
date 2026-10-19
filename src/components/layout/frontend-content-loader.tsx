"use client";

import { useGetContentQuery } from "@/lib/api/endpoints";

export function FrontendContentLoader({ children }: { children: React.ReactNode }) {
  // Fetch hero, footer, announcement content when available
  const { data: heroData } = useGetContentQuery("hero", { skip: false });
  const { data: footerData } = useGetContentQuery("footer", { skip: false });
  const { data: announcementData } = useGetContentQuery("announcement_bar", { skip: false });
  const { data: socialData } = useGetContentQuery("social_links", { skip: false });

  return <>{children}</>;
}
