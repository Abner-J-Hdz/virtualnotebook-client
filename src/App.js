import { Route, Routes, BrowserRouter } from "react-router-dom";

import Layout from './components/Layout';
import NotePage from './pages/NotePage';
import NotFound from './pages/NotFoundPage';
import NotesPage from './pages/NotesPages';
import NoteEditPage from "./pages/NoteEditPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
          <Routes>
            <Route path="/" element={<NotesPage />} />
            <Route path="/newnote" element={<NotePage />} />
            <Route path="/editnote/:id" element={<NoteEditPage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>        
      </Layout>
    </BrowserRouter>      
  );
}

export default App;
