import "./globals.css";

export const metadata = {
  title: "Igor Oliveira | Portifólio",
  description: "Olá, eu sou um porgramador full-stack com foco em next.js, vamos transformar suas ideias em código comigo?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
