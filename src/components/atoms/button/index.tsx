import { TButtonProps } from './button.types';
import { Button as ButtonComponent } from '@/components/ui/button';

export const Button = ({ children, ...props }: TButtonProps) => {
  return <ButtonComponent {...props}>{children}</ButtonComponent>;
};
