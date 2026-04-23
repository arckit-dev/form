import { describe, expect, it } from 'vitest';
import { hasError } from './has-error';

describe('hasError', () => {
  it('should return true when touched, pristine, and invalid', () => {
    expect(hasError({ meta: { isTouched: true, isPristine: true, isBlurred: false, isValid: false } })).toBe(true);
  });

  it('should return true when blurred and invalid', () => {
    expect(hasError({ meta: { isTouched: false, isPristine: false, isBlurred: true, isValid: false } })).toBe(true);
  });

  it('should return false when valid', () => {
    expect(hasError({ meta: { isTouched: true, isPristine: true, isBlurred: true, isValid: true } })).toBe(false);
  });

  it('should return false when not touched, not blurred, and invalid', () => {
    expect(hasError({ meta: { isTouched: false, isPristine: true, isBlurred: false, isValid: false } })).toBe(false);
  });
});
