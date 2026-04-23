# @arckit/form

TanStack Form integration with DaisyUI field components and form utilities.

[![npm version](https://img.shields.io/npm/v/@arckit/form)](https://www.npmjs.com/package/@arckit/form)
[![npm downloads](https://img.shields.io/npm/dm/@arckit/form)](https://www.npmjs.com/package/@arckit/form)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@arckit/form)](https://bundlephobia.com/package/@arckit/form)
[![codecov](https://codecov.io/gh/arckit-dev/form/graph/badge.svg)](https://codecov.io/gh/arckit-dev/form)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## Table of Contents

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

<h2 id="about">About</h2>

Pre-built form fields and utilities for [TanStack Form](https://tanstack.com/form) using [@arckit/daisyui](https://www.npmjs.com/package/@arckit/daisyui) components. Includes Input, Textarea, Checkbox, ComboBox, SelectedItems, Label, ErrorMessage, Counter, and Submit.

Optionally integrates with [Effect Schema](https://effect.website/) for validation via `applyEffectSchema`.

<h2 id="installation">Installation</h2>

```bash
pnpm add @arckit/form @arckit/daisyui @tanstack/react-form
```

For Effect Schema validation:

```bash
pnpm add effect
```

<h2 id="usage">Usage</h2>

```tsx
import { useAppForm, handleSubmit, handleAction } from '@arckit/form';

const MyForm = ({ onSubmit }) => {
  const form = useAppForm({
    defaultValues: { name: '', email: '' },
    onSubmit: handleAction(onSubmit)
  });

  return (
    <form onSubmit={handleSubmit(form)}>
      <form.AppField name='name'>
        {(field) => (
          <>
            <field.Label>Name</field.Label>
            <field.Input isPending={false} />
            <field.Error />
          </>
        )}
      </form.AppField>
      <form.AppForm>
        {(form) => <form.Submit isPending={false}>Send</form.Submit>}
      </form.AppForm>
    </form>
  );
};
```

### Effect Schema validation

```tsx
import { applyEffectSchema } from '@arckit/form';
import { Schema } from 'effect';

const validation = Schema.Struct({
  name: Schema.NonEmptyString,
  email: Schema.NonEmptyString
});

const form = useAppForm({
  defaultValues: { name: '', email: '' },
  validators: { onBlur: applyEffectSchema(validation) }
});
```

<h2 id="api">API</h2>

### Fields

| Component | Description |
|-----------|-------------|
| `Input` | Text input field with error state |
| `Textarea` | Textarea field with error state |
| `Checkbox` | Checkbox with label |
| `ComboBox` | Autocomplete combobox with single/multi selection |
| `SelectedItems` | Display and remove selected items |
| `Label` | Form label linked to field |
| `ErrorMessage` | Field error messages with i18n support |
| `Counter` | Character counter |

### Form Components

| Component | Description |
|-----------|-------------|
| `Submit` | Submit button with loading state |

### Utilities

| Function | Description |
|----------|-------------|
| `useAppForm` | TanStack Form hook with pre-registered field components |
| `handleSubmit` | Form submit handler with preventDefault |
| `handleAction` | Server action handler with startTransition |
| `applyEffectSchema` | Effect Schema validator adapter |
| `fieldErrorTranslation` | Error message i18n key builder |

<h2 id="contributing">Contributing</h2>

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

<h2 id="license">License</h2>

[MIT](LICENSE) &copy; Marc Gavanier
