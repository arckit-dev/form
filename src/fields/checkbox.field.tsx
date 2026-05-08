import { Checkbox as CheckboxBase, type CheckboxProps as CheckboxBaseProps } from '@arckit/daisyui/primitives';
import { useFieldContext } from '../form-context';
import { hasError } from './has-error';
import { Label } from './label.field';

type CheckboxProps = Omit<CheckboxBaseProps, 'name' | 'type'> & {
  isPending: boolean;
  isInvalid?: boolean;
  onValueChange?: (checked: boolean) => void;
};

export const Checkbox = ({
  isPending,
  isInvalid,
  onValueChange,
  children,
  className = 'flex items-center gap-x-1.5',
  ...props
}: CheckboxProps) => {
  const { name, state, handleBlur, handleChange } = useFieldContext<boolean>();
  const showError = isInvalid || hasError(state);

  return (
    <Label className={className}>
      <CheckboxBase
        id={name}
        name={name}
        checked={state.value}
        disabled={isPending ?? props.disabled}
        onBlur={handleBlur}
        onChange={(e) => {
          handleChange(e.target.checked);
          onValueChange?.(e.target.checked);
        }}
        color={showError ? 'checkbox-error' : 'checkbox-primary'}
        className={showError ? undefined : 'not-checked:border-base-500'}
        {...props}
      />
      {children}
    </Label>
  );
};
