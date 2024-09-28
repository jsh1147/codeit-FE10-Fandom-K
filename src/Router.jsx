import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import CreditTestPage from './pages/CreditTestPage';
import Layout from './components/layout/Layout';
import ListPage from './pages/listPage/ListPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<h1>Rending Page</h1>} />
      <Route element={<Layout />}>
        <Route path="list" element={<ListPage />} />
        <Route path="mypage" element={<h1>My Page</h1>} />
        <Route path="creditTest" element={<CreditTestPage />} />
        <Route path="*" element={<h1>Non Page</h1>} />
      </Route>
    </>,
  ),
);

export default function Router() {
  return <RouterProvider router={router} />;
}
