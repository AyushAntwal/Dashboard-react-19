import { Suspense } from 'react';
import './App.css'
import route from './Routes.tsx';
import { RouterProvider } from 'react-router';
import Loading from './Loading.tsx';




function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={route} />
    </Suspense>
  );
}

export default App
