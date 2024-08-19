import Subheader from "@/workspace/SubHeader";
import { Section, LinkButton } from "@/components";
import { iconBinance } from "@/app/assets";

export default function WalletNav() {
  return (
    <nav className="w-full">
      <Subheader title="ბინანს ბლოკჩეინი" icon={iconBinance.src} />
      <Section>
        <LinkButton to="/wallet/create" title="საფულის შექმნა" />
        <LinkButton to="/wallet/scan" title="საფულის სკანირება" />
      </Section>
    </nav>
  );
}
