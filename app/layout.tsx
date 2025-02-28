"use client";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { metadata } from "utils/metadata";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Logo from "@/components/Logo";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4F46E5",
    },
    secondary: {
      main: "#2E2836",
    },
  },
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-BR">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="min-h-[calc(100dvh)] bg-off-white flex flex-col">
        <Logo />
        <main className="px-16 pt-4 pb-6">
          <ThemeProvider theme={theme}>
            {children}
            <ToastContainer limit={1} />
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
