import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="JaldiPay">
      <Image src="/images/jaldipay-logo.svg" alt="JaldiPay" width={140} height={29} />
    </Link>
  );
}
