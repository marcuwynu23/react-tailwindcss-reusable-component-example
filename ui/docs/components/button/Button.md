# 🟢 Button Component Usage

The `Button` component provides a reusable, styled button with support for customization via props and Tailwind utility classes.

---

## ✅ Basic Usage

```tsx
import { Button } from "ui";

function App() {
  return (
    <Button onClick={() => alert("Clicked!")}>
      Click Me
    </Button>
  );
}
```

Renders a green, rounded button with hover and focus effects.

---

## 🛠️ Props

| Prop       | Type                            | Description                                           |
|------------|----------------------------------|-------------------------------------------------------|
| `children` | `React.ReactNode`                | The label or content inside the button               |
| `className`| `string`                         | Optional Tailwind classes to override or extend style|
| `...rest`  | All native `button` attributes   | Like `onClick`, `disabled`, `type`, `title`, etc.    |

---

## 🎨 Customizing Appearance

You can override or extend styles using the `className` prop:

```tsx
<Button className="bg-blue-600 hover:bg-blue-700">
  Blue Button
</Button>
```

Add icons or elements:

```tsx
<Button>
  <span className="mr-2">🔒</span> Login
</Button>
```

---

## 🔁 Example Variants

```tsx
<Button className="bg-red-600 hover:bg-red-700">
  Danger
</Button>

<Button className="bg-yellow-500 text-black hover:bg-yellow-600">
  Warning
</Button>

<Button className="bg-gray-200 text-gray-800 hover:bg-gray-300">
  Secondary
</Button>
```

---

## 🔍 Accessibility

- Includes `focus:outline-none` and `focus:ring` for keyboard navigation.
- Add `aria-label` or `title` for buttons with icon-only content.

---

## 🧠 Under the Hood

The component uses `clsx` to merge the default and user-defined classes:

```ts
clsx("default-styles", className)
```

This ensures that any extra `className` provided by the user is safely applied without overriding required base styles.