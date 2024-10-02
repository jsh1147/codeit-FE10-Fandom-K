import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import CreditTestPage from './pages/CreditTestPage';
import LandingPage from './pages/landingPage/LandingPage';
import Layout from './components/layout/Layout';
import ListPage from './pages/listPage/ListPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<LandingPage />} />
      <Route element={<Layout />}>
        <Route path="list" element={<ListPage />} />
        <Route path="mypage" element={<h1>My Page</h1>} />
        <Route path="creditTest" element={<CreditTestPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </>,
  ),
);

export default function Router() {
  return <RouterProvider router={router} />;
}
