import Header from '@/components/home/Header';
import InfoCard from '@/components/home/InfoCard';
import PopularRoutesSection from '@/components/home/PopularRoutesSection';
import RecommendedRoutesSection from '@/components/home/RecommendedRoutesSection';
import TravelSection from '@/components/home/TravelSection';
import DefaultLayout from '@/layouts/DefaultLayout';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <DefaultLayout>
      <Header />
      <InfoCard />
      <TravelSection />
      <RecommendedRoutesSection />
      <PopularRoutesSection />
    </DefaultLayout>
  );
}
