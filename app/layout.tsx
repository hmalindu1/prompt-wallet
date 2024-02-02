import "@/styles/globals.css";

export const metadata = {
  title: "Propmt Wallet",
  description: "Discove and share your reusable AI promopts",
};

const RootLayout = ({ Children }: { Children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <div className="main">
          <div className="gradient" />

          <main>{Children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
