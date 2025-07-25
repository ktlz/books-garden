import { BookPageClient } from "@/components";

type Props = {
  params: { slug: string };
};

export default function Page({ params }: Props) {
  return <BookPageClient slug={params.slug} />;
}
