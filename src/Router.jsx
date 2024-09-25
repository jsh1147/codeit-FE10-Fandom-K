import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<h1>Rending Page</h1>} />
      <Route>
        <Route path="list" element={<h1>List Page</h1>} />
        <Route path="mypage" element={<h1>My Page</h1>} />
        <Route path="*" element={<h1>Non Page</h1>} />
      </Route>
    </>,
  ),
);

export default function Router() {
  return <RouterProvider router={router} />;
}
