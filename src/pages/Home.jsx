import Header from '../components/Header';
import HowItWorks from '../components/HowItWorks';
import CountSell from '../components/CountSell';
import Properties from './Properties';

const Home = () => {
  return (
    <>
      <Header />
      <Properties maxItems={6} />
      <HowItWorks />
      <CountSell />
    </>
  );
};

export default Home;
