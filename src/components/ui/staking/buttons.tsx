import Link from "next/link";
import { Button } from "../button";

export function UpdateInvoice({ name }: { name: string }) {
  return (
    <Link href={`/staking/${name}`} passHref className="w-full">
      <Button className="bg-blue-400 hover:bg-blue-500">Stake</Button>
    </Link>
  );
}
