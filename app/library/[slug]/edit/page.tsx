import { EditBookPage } from "@/components";

type Props = {
  params: { slug: string };
};

export default function Page({ params }: Props) {
  return <EditBookPage slug={params.slug} />;
}
