# 📘 JSX Attributes vs HTML Attributes

When writing React components using JSX, some HTML attributes need to be renamed or written differently to avoid conflicts with JavaScript syntax or follow JSX conventions.

---

## 🔄 Key Differences Between JSX and HTML Attributes

| **HTML**         | **JSX**            | **Reason / Notes**                                 |
|------------------|--------------------|-----------------------------------------------------|
| `class`          | `className`        | `class` is a reserved word in JavaScript           |
| `for`            | `htmlFor`          | `for` is reserved in JavaScript loops              |
| `onclick`        | `onClick`          | JSX uses **camelCase** for events                  |
| `onchange`       | `onChange`         | Events are **case-sensitive** in JSX               |
| `tabindex`       | `tabIndex`         | CamelCase used in JSX                              |
| `readonly`       | `readOnly`         | Boolean attributes use camelCase in JSX            |
| `maxlength`      | `maxLength`        | CamelCase for multi-word attributes                |
| `autocomplete`   | `autoComplete`     | CamelCase for consistency with JS conventions      |
| `colspan`        | `colSpan`          | JSX uses camelCase for multi-word props            |
| `contenteditable`| `contentEditable`  | Follows same camelCase rule                        |
| `aria-*`         | Same in JSX        | Passed through as-is                               |
| `data-*`         | Same in JSX        | Passed through as-is                               |

---

## ✅ Boolean Attributes in JSX

In **HTML**:

```html
<input disabled />
```

In **JSX**:

```jsx
<input disabled={true} />
<input disabled />
```