'use client';

import { Button } from '@/components/atoms/button';
import { useErrorBoundary } from '@/hooks/util-hooks/use-error-boundary.hook';

interface ErrorBoundaryWrapperProps {
  children: React.ReactNode;
}

export const ErrorBoundaryWrapper = ({
  children
}: ErrorBoundaryWrapperProps) => {
  const { error, resetError } = useErrorBoundary();

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="mb-4 text-6xl">😵</div>
          <h1 className="mb-4 text-2xl font-bold text-gray-800">
            Ops! Algo deu errado
          </h1>
          <p className="mb-6 text-gray-600">
            Ocorreu um erro inesperado. Tente recarregar a página.
          </p>
          <Button
            onClick={resetError}
            className="cursor-pointer rounded-lg bg-blue-500 px-6 py-3 text-white transition-colors hover:bg-blue-600"
          >
            Tentar Novamente
          </Button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
