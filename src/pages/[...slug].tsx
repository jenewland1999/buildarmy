import Container from "@components/layout/Container";
import Layout from "@components/layout/Layout";
import sanitize from "@utils/sanitise";
import { useRouter } from "next/dist/client/router";

const Page = ({ data }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Layout>
        <Container>Loading...</Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <div
        className="relative max-w-prose mx-auto px-4 prose prose-yellow"
        dangerouslySetInnerHTML={{
          __html: sanitize(data?.page?.content ?? {}),
        }}
      />
    </Layout>
  );
};

export default Page;
