# Toast Usage Example

This guide shows you how to use the reusable Toast system from the ui library for global notifications.

## App.tsx — Global Setup with Provider

```tsx
import React from "react";
import {Button, ToastProvider, ToastContainer, useToast} from "ui";

const AppContent = () => {
  const toast = useToast();

  return (
    <div className="p-6">
      <Button onClick={() => toast("success", "Action completed!")}>
        Show Toast
      </Button>
    </div>
  );
};

const App = () => {
  return (
    <ToastProvider>
      <AppContent />
      <ToastContainer />
    </ToastProvider>
  );
};

export default App;
```

How it works:

- ToastProvider manages global toast state.
- useToast() returns a toast(type, message) function.
- ToastContainer renders the stack of toasts on the screen.

The toast() function supports auto-dismissal after 4 seconds.

## Component or page

```tsx
import {useToast, Button} from "ui";

const MyComponent = () => {
  const toast = useToast();

  return (
    <Button onClick={() => toast("success", "Saved successfully!")}>
      Show Toast
    </Button>
  );
};
```

You must still have ToastProvider and ToastContainer mounted somewhere in the parent tree (usually in App.tsx).

## available types

```ts
toast("success", "Success message");
toast("error", "Something went wrong");
toast("info", "Heads up!");
```

| Type      | Description                   |
| --------- | ----------------------------- |
| `success` | For confirming user actions   |
| `error`   | For failures or issues        |
| `info`    | For neutral heads-up messages |

Summary
✅ Call toast(type, message) anywhere in your app.

✅ Auto-hides after 4 seconds.

✅ Lightweight and customizable.

✅ Globally accessible with provider setup.
