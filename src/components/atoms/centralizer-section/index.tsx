import { TCentralizerSectionProps } from './centralizer-section.types';
import { cn } from '@/lib/utils';

export const CentralizerSection = ({
  children,
  className
}: TCentralizerSectionProps) => {
  return (
    <section
      className={cn(
        'mx-auto min-h-[100vh] max-w-[1200px] px-11 pt-20',
        'md:px-3',
        className
      )}
    >
      {children}
    </section>
  );
};
