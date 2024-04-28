import { MantineProvider } from '@mantine/core'
// import { Notifications } from '@mantine/notifications';
// import "@mantine/notifications/styles.css";
import { RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import '@mantine/core/styles.css';

const App = () => {
  return (
    <MantineProvider
      withCssVariables
      withGlobalClasses
      withStaticClasses
    >
      {/* <Notifications position="top-right" zIndex={2077} /> */}
      {/* <RouterProvider router={router} /> */}
      <Home />
    </MantineProvider>
  );
}

export default App;