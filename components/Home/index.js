import { ThemeProvider } from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';
import HomeBanner from '../Banner';

const Home = props => (
  <ThemeProvider theme={{ mode: 'dark' }}>
    <>
      <Header />
      <main id="main__content" role="main">
        <HomeBanner />
      </main>
      <Footer />
    </>
  </ThemeProvider>
);

export default Home;
