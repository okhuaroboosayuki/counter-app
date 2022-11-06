import "./assets/style.css";
import "./assets/errorBoundary.css";
import RouteApp from "./routes/routes";
import Loading from "./components/loading";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert" className="errFallBack">
      <div className="container">
        <h1 className="errFallBack_para" style={{ color: "red" }}>OOPs! Something went wrong</h1>
        <pre >{error.message}</pre>
        <button onClick={resetErrorBoundary}>Reset</button>
      </div>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 5000);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <RouteApp />
        </ErrorBoundary>
      )}
    </>
  );
}

export default App;
