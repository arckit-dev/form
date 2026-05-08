import { describe, expect, it } from 'vitest';
import { hasError } from './has-error';

const meta = (overrides: Partial<{ isTouched: boolean; isPristine: boolean; isBlurred: boolean; isValid: boolean }> = {}) => ({
  isTouched: false,
  isPristine: true,
  isBlurred: false,
  isValid: false,
  ...overrides
});

describe('hasError', () => {
  it('should return true when touched, pristine, and invalid', () => {
    expect(hasError({ meta: meta({ isTouched: true }) })).toBe(true);
  });

  it('should return true when blurred and invalid', () => {
    expect(hasError({ meta: meta({ isBlurred: true }) })).toBe(true);
  });

  it('should return false when valid', () => {
    expect(hasError({ meta: meta({ isValid: true }) })).toBe(false);
  });

  it('should return false when not touched, not blurred, not submitted, and invalid', () => {
    expect(hasError({ meta: meta() })).toBe(false);
  });

  it('should return true when form is submitted and field is invalid', () => {
    expect(hasError({ meta: meta(), formSubmitted: true })).toBe(true);
  });

  it('should return false when form is submitted but field is valid', () => {
    expect(hasError({ meta: meta({ isValid: true }), formSubmitted: true })).toBe(false);
  });
});
