import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Detail from "./pages/Detail";
import List from "./pages/List";
import NotFound from "./pages/NotFound";
import WatchedList from "./pages/WatchedList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<List />} />
          <Route path="detail" element={<Detail />} />
          <Route path="watched-list" element={<WatchedList />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
