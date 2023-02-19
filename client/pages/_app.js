import "@/styles/globals.css";
import { AuthProvider } from "@/store/auth";
import { FetchProvider } from "@/store/fetch";
export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <FetchProvider>
        <Component {...pageProps} />
      </FetchProvider>
    </AuthProvider>
  );
}
