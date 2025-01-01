import ValidatorPage from "@/components/ui/staking/staking-platforms";

export default function Page({ params }: { params: { name: string } }) {
  const paramsPromise = Promise.resolve(params);
  return <ValidatorPage params={paramsPromise} />;
}