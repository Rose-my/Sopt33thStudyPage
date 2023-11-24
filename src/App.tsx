import { ThemeProvider } from 'styled-components';
import Header from '@components/layout/Header/Header';
import Footer from '@components/layout/Footer/Footer';
import GlobalStyle from '@styles/globalStyle';
import theme from '@styles/theme';
import ScreenStar from '@pages/ScreenStar/ScreenStar';
import Collection from '@pages/Collection/Collection';
import Similar from '@pages/Similar/Similar';
import CommentSummary from '@pages/CommentSummary/CommentSummary';
import Casts from '@pages/Casts/Casts';
import Main from '@pages/Main/Main';
import Thumbnail from '@pages/Thumbnail';
import BoxOffice from '@components/boxOffice/boxOffice';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Thumbnail/>
      <Main/>
      <Casts/>
      <CommentSummary/>
      <Collection/>
      <Similar/>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
