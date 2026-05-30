import { createFormHook } from '@tanstack/react-form';
import { lazy, type ReactNode } from 'react';
import { Checkbox } from './fields/checkbox.field';
import { CheckboxGroup } from './fields/checkbox-group.field';
import type { ComboBoxProps } from './fields/combobox.field';
import { Counter } from './fields/counter.field';
import { ErrorMessage } from './fields/error-message.field';
import { Input } from './fields/input.field';
import { Label } from './fields/label.field';
import { Select } from './fields/select.field';
import type { SelectedItemProps } from './fields/selected-items.field';
import { Textarea } from './fields/textarea.field';
import { fieldContext, formContext } from './form-context';

const Combobox = lazy(() => import('./fields/combobox.field').then((module) => ({ default: module.ComboBox }))) as <
  TItem,
  TPayload extends object
>(
  props: ComboBoxProps<TItem, TPayload>
) => ReactNode;
const SelectedItems = lazy(() =>
  import('./fields/selected-items.field').then((module) => ({ default: module.SelectedItems }))
) as <T>(props: SelectedItemProps<T>) => ReactNode;

const Submit = lazy(() => import('./form/submit.form').then((module) => ({ default: module.Submit })));

export const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    Input,
    Textarea,
    Select,
    Label,
    Error: ErrorMessage,
    Counter,
    Checkbox,
    CheckboxGroup,
    Combobox,
    SelectedItems
  },
  formComponents: { Submit }
});
