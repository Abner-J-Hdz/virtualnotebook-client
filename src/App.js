import { Route, Routes, BrowserRouter } from "react-router-dom";

import Layout from './components/Layout';
import NotePage from './pages/NotePage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
          <Routes>
            <Route path="/" element={<NotePage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>        
      </Layout>
    </BrowserRouter>      
  );
}

export default App;
