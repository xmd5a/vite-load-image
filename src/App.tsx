import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import { ImageLoader } from "./ImageLoader";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ImageLoader />
    </QueryClientProvider>
  );
};

export default App;
