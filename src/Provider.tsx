import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { OverlayProvider } from "overlay-kit";
import { ReactNode, Suspense } from "react";

const queryClient = new QueryClient({});

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Loading...</div>}>
        <OverlayProvider>{children}</OverlayProvider>
      </Suspense>
    </QueryClientProvider>
  );
};

export default Provider;
