import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { useReactQueryConfig } from './hooks/useReactQueryConfig';

// Create a wrapper component that uses the custom hook
const QueryClientWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const queryClient = useReactQueryConfig();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default QueryClientWrapper;
