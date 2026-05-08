import { Select as SelectBase, type SelectProps as SelectBaseProps } from '@arckit/daisyui/primitives';
import { useFieldContext } from '../form-context';
import { hasError } from './has-error';

type SelectProps = Omit<SelectBaseProps, 'name' | 'value' | 'onChange'> & {
  isPending: boolean;
  onValueChange?: (value: string) => void;
};

export const Select = ({ className = 'w-full', isPending, onValueChange, children, ...props }: SelectProps) => {
  const { name, state, handleBlur, handleChange } = useFieldContext<string>();

  return (
    <SelectBase
      id={name}
      name={name}
      value={state.value ?? ''}
      disabled={isPending ?? props.disabled}
      onBlur={handleBlur}
      onChange={(e) => {
        handleChange(e.target.value);
        onValueChange?.(e.target.value);
      }}
      color={hasError(state) ? 'select-error' : undefined}
      className={className}
      {...props}
    >
      {children}
    </SelectBase>
  );
};
