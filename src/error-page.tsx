import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error:any = useRouteError();

  return (
    <div id="error-page" className="flex flex-col justify-center items-center h-[100vh] w-[100vw]">
      <h1 className="text-4xl font-semibold">Oops!</h1> <br/>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}