"use client";

interface Props {
    error: Error;
    reset: () => void;
}

const ErrorPage = ({error, reset}: Props) => {
  return (
    <>
      <h1 className="text-red-500">Unexpected error occured.</h1>
      <button className="btn" onClick={() => reset()}>Retry</button>
    </>
  );
};

export default ErrorPage;
