import "./globals.css";

export const metadata = {
  title: "Swaron.io",
  description:
    "Welcome to Swaron.io! We offer a variety of online courses taught by experts in various fields. Learn at your own pace, from anywhere in the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="bg-app_bg"
      >
        {children}
      </body>
    </html>
  );
}
