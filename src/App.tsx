import { Suspense } from 'react';
import './App.css'
import route from './Routes.tsx';
import { RouterProvider } from 'react-router';



const Loading = () => <div>Loading...</div>;

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={route} />
    </Suspense>
  );
}

export default App
