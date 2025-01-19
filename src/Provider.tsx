import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { OverlayProvider } from "overlay-kit";
import { ReactNode, Suspense } from "react";

import { Lottie } from "@toss/lottie";

const queryClient = new QueryClient({});

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense
        fallback={
          <div className="w-full h-[100vh] flex justify-center items-center">
            <Lottie src="/public/spinner.json" width={120} height={120} />
          </div>
        }
      >
        <OverlayProvider>{children}</OverlayProvider>
      </Suspense>
    </QueryClientProvider>
  );
};

export default Provider;
