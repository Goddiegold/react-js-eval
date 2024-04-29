import { MantineProvider } from '@mantine/core'
import Home from './pages/Home';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

const App = () => {
  return (
    <MantineProvider
      withCssVariables
      withGlobalClasses
      withStaticClasses
    >
      <Home />
    </MantineProvider>
  );
}

export default App;