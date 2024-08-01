import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  let errorMessage;
  if (error && error.statusText) {
    errorMessage = error.statusText;
  } else if (error && error.message) {
    errorMessage = error.message;
  } else {
    errorMessage = "An unexpected error occurred.";
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}