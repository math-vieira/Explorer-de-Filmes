import { Footer } from '@/components/molecules/footer';
import { Header } from '@/components/molecules/header';
import { CentralizerSection } from '@/components/atoms/centralizer-section';
import { QueryClientProviderComponent } from '@/provider/query-client-provider';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <CentralizerSection>
        <QueryClientProviderComponent>{children}</QueryClientProviderComponent>
      </CentralizerSection>
      <Footer />
    </>
  );
};
