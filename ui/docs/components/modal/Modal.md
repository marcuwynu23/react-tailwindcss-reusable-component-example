# Modal Usage Example

This guide shows you how to use the reusable Modal component and useModal hook from your ui library to display modals anywhere in your app.

## App.tsx

```tsx
import React from "react";
import {Button, Modal, useModal} from "ui";

const AppContent = () => {
  const {isOpen, openModal, closeModal} = useModal();

  return (
    <div className="p-6">
      <Button onClick={openModal}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <h2 className="text-xl font-semibold mb-2">Modal Title</h2>
        <p className="mb-4">This is the modal content.</p>
        <Button onClick={closeModal}>Close</Button>
      </Modal>
    </div>
  );
};

export default AppContent;
```

What’s happening here:

- useModal() is a custom hook to manage modal visibility.
- isOpen is a boolean that tells the Modal whether it should be shown.
- openModal() and closeModal() are used to control visibility.

Clicking outside the modal or on the "Close" button will hide it.

## Inside Any Component or Page

```tsx
import {useModal, Modal, Button} from "ui";

const MyComponent = () => {
  const {isOpen, openModal, closeModal} = useModal();

  return (
    <>
      <Button onClick={openModal}>Launch</Button>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <h2 className="text-lg font-bold mb-2">Hello!</h2>
        <p className="mb-4">I’m inside the modal.</p>
        <Button onClick={closeModal}>Dismiss</Button>
      </Modal>
    </>
  );
};
```

This works the same as in App.tsx, just scoped to the current component.

### Explanation

#### useModal Hook

```tsx
const {isOpen, openModal, closeModal, modalRef} = useModal();
```
