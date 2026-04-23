import { describe, expect, it } from 'vitest';
import { fieldErrorTranslation } from './field-error-translation';

describe('fieldErrorTranslation', () => {
  it('should build translation key from field name and message', () => {
    expect(fieldErrorTranslation('email', 'required')).toBe('form.email.error.required');
  });

  it('should handle nested field names', () => {
    expect(fieldErrorTranslation('address.street', 'tooShort')).toBe('form.address.street.error.tooShort');
  });
});
