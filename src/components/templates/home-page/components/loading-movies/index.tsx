export const LoadingMovies = () => {
  return (
    <div data-testid="loading-skeleton" className="animate-pulse">
      <div className="mb-4 h-96 w-full rounded-lg bg-gray-300"></div>
      <div className="space-y-3">
        <div className="h-6 w-3/4 rounded bg-gray-300"></div>
        <div className="h-4 w-full rounded bg-gray-300"></div>
        <div className="h-4 w-2/3 rounded bg-gray-300"></div>
        <div className="flex justify-between">
          <div className="h-4 w-1/3 rounded bg-gray-300"></div>
          <div className="h-4 w-1/4 rounded bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};
