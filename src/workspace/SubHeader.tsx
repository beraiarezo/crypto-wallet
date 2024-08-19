import Image from "next/image";

export default function SubHeader({
  title,
  icon,
}: {
  title: string;
  icon: string;
}) {
  return (
    <div className="flex w-full p-5 justify-between">
      <h1 className="font-bpg-arial font-normal text-base">{title}</h1>
      <Image src={icon} alt="binance logo" width={100} height={24} priority />
    </div>
  );
}
