import { Input } from '@/components/ui/input';
import { TSearchBarProps } from './search-bar.types';

export const SearchBar = ({ label, ...props }: TSearchBarProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label htmlFor={props.id}>{label}</label>}
      <Input {...props} />
    </div>
  );
};
