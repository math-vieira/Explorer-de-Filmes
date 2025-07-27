import { Footer } from '@/components/molecules/footer';
import { Header } from '@/components/molecules/header';
import { CentralizerSection } from '@/components/atoms/centralizer-section';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <CentralizerSection>{children}</CentralizerSection>
      <Footer />
    </>
  );
};
