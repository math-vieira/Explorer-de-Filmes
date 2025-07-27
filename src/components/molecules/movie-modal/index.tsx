import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { MovieModalProps } from './movie-modal.types';

export const MovieModal = ({ movie, isOpen, onClose }: MovieModalProps) => {
  const imageUrl = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800">
            {movie.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="relative h-64 w-full overflow-hidden rounded-lg">
            <Image
              src={imageUrl}
              alt={movie.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                Sinopse
              </h3>
              <p className="leading-relaxed text-gray-600">
                {movie.overview || 'Sinopse não disponível.'}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-700">
                  Data de Lançamento
                </h4>
                <p className="text-gray-600">
                  {formatDate(movie.release_date)}
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-700">Idioma Original</h4>
                <p className="text-gray-600 uppercase">
                  {movie.original_language}
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-700">Avaliação</h4>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500">⭐</span>
                  <span className="text-gray-600">
                    {movie.vote_average.toFixed(1)} ({movie.vote_count} votos)
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-700">Popularidade</h4>
                <p className="text-gray-600">{movie.popularity.toFixed(0)}</p>
              </div>
            </div>

            {movie.original_title !== movie.title && (
              <div>
                <h4 className="font-medium text-gray-700">Título Original</h4>
                <p className="text-gray-600 italic">{movie.original_title}</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8">
          <Button
            onClick={onClose}
            className="w-full cursor-pointer bg-black px-8 py-2 text-white hover:bg-gray-800"
          >
            Fechar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
