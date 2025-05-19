import * as React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const FloatingInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <Input
        placeholder=" "
        ref={ref}
        {...props}
        className={cn(
          'peer block w-full rounded-xl border border-gray-300 bg-white px-5 pt-7 pb-2 text-sm font-medium text-gray-800 placeholder-transparent focus:border-black focus:outline-none focus:ring-0',
          className
        )}
      />
    );
  }
);
FloatingInput.displayName = 'FloatingInput';

const FloatingLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => {
  return (
    <Label
      ref={ref}
      {...props}
      className={cn(
        'absolute left-5 top-1.5 z-10 origin-[0] scale-75 transform text-base text-[#444444] opacity-[40%] transition-all peer-placeholder-shown:top-4 peer:not(:placeholder-shown):top-2.5 peer:not(:placeholder-shown):scale-75 peer-placeholder-shown:scale-95 peer-placeholder-shown:text-base peer-focus:top-1.5 peer-focus:scale-75 peer-focus:text-[#444444]',
        className
      )}
    />
  );
});
FloatingLabel.displayName = 'FloatingLabel';

type FloatingLabelInputProps = InputProps & {
  label?: string;
};

const FloatingLabelInput = React.forwardRef<
  React.ElementRef<typeof FloatingInput>,
  React.PropsWithoutRef<FloatingLabelInputProps>
>(({ id, label, ...props }, ref) => {
  return (
    <div className="relative w-full">
      <FloatingInput ref={ref} id={id} {...props} />
      {label && <FloatingLabel htmlFor={id}>{label}</FloatingLabel>}
    </div>
  );
});
FloatingLabelInput.displayName = 'FloatingLabelInput';

export { FloatingInput, FloatingLabel, FloatingLabelInput };
