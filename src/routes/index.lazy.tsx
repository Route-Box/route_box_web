import Typography from '@/components/common/Typography';
import Header from '@/components/home/Header';
import InfoCard from '@/components/home/InfoCard';
import PopularRoutesSection from '@/components/home/PopularRoutesSection';
import RecommendedRoutesSection from '@/components/home/RecommendedRoutesSection';
import TravelSection from '@/components/home/TravelSection';
import { useNativeBridge } from '@/hooks/useNativeBridge';
import DefaultLayout from '@/layouts/DefaultLayout';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  const { token, renderMessage, toggleMessageVisibility } = useNativeBridge();

  return (
    <DefaultLayout>
      <Header />
      <InfoCard />
      <TravelSection />
      {token && <RecommendedRoutesSection />}
      {token && <PopularRoutesSection />}
      {!token && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}>
          <Typography variant="Body_B_M" color="#70747E">
            로그인이 필요합니다.
          </Typography>
        </div>
      )}

      {import.meta.env.VITE_APP_BUILD_ENV !== 'production' && renderMessage()}
      {import.meta.env.VITE_APP_BUILD_ENV !== 'production' && (
        <button
          onClick={toggleMessageVisibility}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#47c4b6',
            outline: 0,
            border: 0,
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
          }}
        >
          Toggle Message
        </button>
      )}
    </DefaultLayout>
  );
}
