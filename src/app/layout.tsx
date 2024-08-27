import { AppContextProvider } from "@/context/GlobalContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppContextProvider>{children}</AppContextProvider>
    </html>
  );
}
