import { Button } from '@/components/atoms/button';
import { PaginationProps } from './pagination.types';

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-8 flex justify-end gap-2">
      <Button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="cursor-pointer rounded-lg bg-gray-200 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Anterior
      </Button>
      <span className="px-4 py-2 text-gray-600">
        {currentPage} de {totalPages}
      </span>
      <Button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="cursor-pointer rounded-lg bg-gray-200 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Próximo
      </Button>
    </div>
  );
};
