import Navbar from "@/components/navbar";
import FooterNew from "@/components/footer-new";
import ExchangeCalculator from "@/components/exchange-calculator";
import ChatWidget from "@/components/chat-widget";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="relative flex grow flex-col">{children}</main>
      <FooterNew />
      <ExchangeCalculator />
      <ChatWidget />
    </>
  );
}
