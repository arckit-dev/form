import type { ButtonClass, ButtonProps } from '@arckit/daisyui/primitives';
import { LoadingButton } from '@arckit/daisyui/primitives';

const buttonClass: ButtonClass = { color: 'btn-primary' };

export const Submit = ({ isPending, ...props }: { isPending: boolean } & ButtonProps) => (
  <LoadingButton type='submit' isLoading={isPending} {...{ ...buttonClass, ...props }} />
);
