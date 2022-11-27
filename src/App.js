import { Route, Routes, BrowserRouter } from "react-router-dom";

import Layout from './components/Layout';
import NotePage from './pages/NotePage';
import NotFound from './pages/NotFoundPage';
import Notes from './pages/NotesPages';

function App() {
  return (
    <BrowserRouter>
      <Layout>
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/newnote" element={<NotePage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>        
      </Layout>
    </BrowserRouter>      
  );
}

export default App;
