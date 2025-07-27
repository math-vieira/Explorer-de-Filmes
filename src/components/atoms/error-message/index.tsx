interface ErrorMessageProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorMessage = ({
  message = 'Ocorreu um erro ao carregar os dados.',
  onRetry
}: ErrorMessageProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="mb-4 text-4xl">😕</div>
      <h3 className="mb-2 text-lg font-semibold text-gray-800">
        Erro ao carregar
      </h3>
      <p className="mb-6 max-w-md text-center text-gray-600">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="cursor-pointer rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
        >
          Tentar Novamente
        </button>
      )}
    </div>
  );
};
