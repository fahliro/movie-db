import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
const Layout = lazy(() => import("./Layout"));
const Detail = lazy(() => import("./pages/Detail"));
const List = lazy(() => import("./pages/List"));
const NotFound = lazy(() => import("./pages/NotFound"));
const WatchedList = lazy(() => import("./pages/WatchedList"));

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<Loading />}>
              <Layout />
            </React.Suspense>
          }
        >
          <Route
            index
            element={
              <React.Suspense fallback={<Loading />}>
                <List />
              </React.Suspense>
            }
          />
          <Route
            path="detail/:id"
            element={
              <React.Suspense fallback={<Loading />}>
                <Detail />
              </React.Suspense>
            }
          />
          <Route
            path="watched-list"
            element={
              <React.Suspense fallback={<Loading />}>
                <WatchedList />
              </React.Suspense>
            }
          />
          <Route
            path="*"
            element={
              <React.Suspense fallback={<Loading />}>
                <NotFound />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
