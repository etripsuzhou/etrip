import "./globals.css";


export const metadata = {
metadataBase: new URL("https://etripglobal.com"),

  title: "ETrip | Making China Easy",
  description:
    "Your trusted partner for travel, business, medical and local services across China.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


return (

<html lang="en">

<body>

{children}

</body>

</html>

);

}