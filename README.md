# React TailwindCSS Reusable Component Example

This is a minimal example of how to create and use a reusable component library (`ui`) in a local React project (`app`) using **Tailwind CSS** and **Vite**.

---

## 🧱 Project Structure

```
.
├── app/        # Main React App
└── ui/         # Reusable Component Library (with TailwindCSS)
```

---

## 🛠️ Installation

1. **Build the UI package**

```bash
cd ui
npm install
npm run build
```

2. **Install dependencies in App**

```bash
cd ../app
npm install
```

---

## 🚀 Running the App

```bash
cd app
npm run dev
```

---

## 🔁 Updating the UI Package Locally

Whenever you make changes in the `ui` package:

```bash
cd ui
npm run build
cd ../app
npm install
```

---

## ⚙️ Optional: Use `blocrun` Tool

To simplify development and syncing:

1. **Install BlocRun globally**

```bash
npm install -g blocrun
```

2. **Create a `Blocfile` in your project root (if not exists)**

```
dev {
    % cd app && npm run dev
}

install {
    % cd app && npm install
    % cd ui && npm install
}

update:ui {
    % cd ui && npm run build
    % cd app && npm install
}
```

3. **Run commands**

- Start app:

```bash
blocr run dev
```

- Rebuild UI and update app:

```bash
blocr run update:ui
```

---

## 🧪 Example Usage

```tsx
// app/src/App.tsx
import {Button} from "ui";

function App() {
  return <Button>Click Me</Button>;
}

export default App;
```

---

## 📦 Technologies Used

- React 19
- TailwindCSS 4
- Vite 6
- TypeScript
