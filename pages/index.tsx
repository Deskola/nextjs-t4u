import Footer from '@/components/molecules/footer';
import LandingCarousel from '@/components/molecules/landing_carousel';
import LandingHeader from '@/components/organisms/landing_header';
import { Box } from '@chakra-ui/react';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <LandingHeader>
      <Box>
        <LandingCarousel />
        <Box>more</Box>
      </Box>
    </LandingHeader>
  );
}

Home.nonAuth = true;

export default Home;
