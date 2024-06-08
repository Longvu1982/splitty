import BillingSection from '@/components/home/BillingSection';
import Header from '@/components/home/Header';
import LayoutGradientWrapper from '@/components/LayoutGradientWrapper';

export default function HomeScreen() {
  return (
    <LayoutGradientWrapper>
      <Header classNames="mb-6" />
      <BillingSection />
    </LayoutGradientWrapper>
  );
}
