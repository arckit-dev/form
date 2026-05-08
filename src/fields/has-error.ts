export const hasError = ({
  meta: { isTouched, isPristine, isBlurred, isValid },
  formSubmitted = false
}: {
  meta: {
    isTouched: boolean;
    isPristine: boolean;
    isBlurred: boolean;
    isValid: boolean;
  };
  formSubmitted?: boolean;
}) => !isValid && (formSubmitted || (isTouched && isPristine) || isBlurred);
