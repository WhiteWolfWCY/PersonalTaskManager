import React, {FC, ReactElement} from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customTheme } from './theme/customTheme';
import { Dashboard } from './pages/dashboard/dashboard';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { rootContext } from './context/root.context';
import ComposeContext from './context/Compose.context';

const queryClient = new QueryClient();

const App:FC = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <ComposeContext components={rootContext}>
        <ThemeProvider theme={customTheme}>
          <CssBaseline />
          <Dashboard />
        </ThemeProvider> 
      </ComposeContext>
    </QueryClientProvider>
  );
};

export default App;
