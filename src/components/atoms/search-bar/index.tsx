import { Input } from '@/components/ui/input';
import { TSearchBarProps } from './search-bar.types';

export const SearchBar = ({
  label,
  id = 'search-input',
  ...props
}: TSearchBarProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label htmlFor={id}>{label}</label>}
      <Input id={id} {...props} />
    </div>
  );
};
