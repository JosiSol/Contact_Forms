# Contact Forms

A modern, minimal React contact form app built with TypeScript, Vite, Tailwind CSS and React Hook Forms.

## Features

- Form validation with [react-hook-form](https://react-hook-form.com/)
- Responsive contact form UI
- Styled with Tailwind CSS
- Built using Vite for fast development
- TypeScript for type safety

## Project Structure

```
/ (root)
├── public/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── components/
│       ├── Contact.tsx
│       └── Form.tsx
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig*.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### How to View the Website

1. Start the development server with `npm run dev`.
2. Open your browser and go to [http://localhost:5173](http://localhost:5173) (or the URL shown in your terminal).

## License

This project is open source and available under the MIT License.
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 📸 Preview

<img width="1439" height="713" alt="Screenshot 2025-07-18 at 3 42 25 in the afternoon" src="https://github.com/user-attachments/assets/13c46efc-81a0-4631-b77d-22b20d1945a4" />

It also validates the correctness of the email format

<img width="1440" height="708" alt="Screenshot 2025-07-18 at 3 45 05 in the afternoon" src="https://github.com/user-attachments/assets/c4028d7d-bd5a-4a29-882e-fe688376f7d1" />

Upon successful validation, the data is sent to the console and a success message along with a reset button are displayed. The data could in the future be sent to some API for further development

<img width="1440" height="772" alt="Screenshot 2025-07-18 at 3 45 57 in the afternoon" src="https://github.com/user-attachments/assets/f29abb6b-3263-4cb7-8810-617dc09906ad" />
