export const transformValue =
  <TIn, TOut>(transform: (value: TIn) => TOut) =>
  <TResult>(validate: (args: { value: TOut }) => TResult) =>
  ({ value }: { value: TIn }): TResult =>
    validate({ value: transform(value) });
