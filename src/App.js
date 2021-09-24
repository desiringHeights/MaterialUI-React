import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './pages/home';
import SocialMediaPlatforms from './pages/socialMediaPlatforms';
import MarketingCampaigns from './pages/marketingCampaigns';
import FAQ from './pages/faq';
import About from './pages/about';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import globals from './globals';

import './app.scss';
import styles from './styles/main.module.scss';

function App() {
  return (
    <Router>
      <Header/>
      <main className={styles.main}>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path={globals.SMP_PATH} exact component={SocialMediaPlatforms}/>
          <Route path={globals.MC_PATH} exact component={MarketingCampaigns}/>
          <Route path={globals.FAQ_PATH} exact component={FAQ}/>
          <Route path={globals.ABOUT_PATH} exact component={About}/>
        </Switch>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
