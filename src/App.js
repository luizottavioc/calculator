import './styles/variables.scss';
import './styles/mixins.scss';
import './styles/main.scss';

import './styles/components/layout/navbar.scss';
import './styles/components/layout/page-container.scss';
import './styles/components/layout/footer.scss';

import './styles/components/calculator/calculator.scss';

import Navbar from './components/layout/navbar/Navbar';
import PageContainer from './components/layout/pageContainer/PageContainer';
import Footer from './components/layout/footer/Footer';
import Calculator from './components/calculator/Calculator';

import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState(true);

  return (
    <div className={`App ${theme ? 'light' : 'dark'}`}>
      <Navbar setTheme={setTheme} />
      <PageContainer>
        <Calculator />
      </PageContainer>
      <Footer text="luizottavio49@gmail.com" />
    </div>
  );
}

export default App;
