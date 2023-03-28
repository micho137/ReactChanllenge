import { ApolloProvider } from "@apollo/client";
import { AppRouter } from "./router/AppRouter.jsx";

import client from "./graphql/client.js";
import { AuthProvider } from "./auth";

function App() {
  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <AppRouter />
      </ApolloProvider>
    </AuthProvider>
  );
}

export default App;
