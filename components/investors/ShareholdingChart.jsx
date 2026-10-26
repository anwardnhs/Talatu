import { CountUp } from "@/components/shared/CountUp";
import { investors } from "@/data/investors";

const groups = [{ label: "Founding family", value: investors.shareholdingSummary.founderFamily, colour: "#754043" }, { label: "Institutions", value: investors.shareholdingSummary.institutions, colour: "#37423d" }, { label: "Public", value: investors.shareholdingSummary.public, colour: "#9a8873" }, { label: "Employees & trusts", value: investors.shareholdingSummary.employeesAndTrusts, colour: "#d1bfa7" }];
export function ShareholdingChart() {
  let offset = 0;
  return <div className="shareholding-chart"><div className="ownership-ring"><svg viewBox="0 0 220 220" role="img" aria-label="Ownership: founding family 59.6%, institutions 22%, public 14.6%, employees and trusts 3.8%"><circle cx="110" cy="110" r="84" fill="none" stroke="#e9e1d5" strokeWidth="23" />{groups.map((group) => { const start = offset; offset += group.value; return <circle key={group.label} cx="110" cy="110" r="84" fill="none" stroke={group.colour} strokeWidth="23" pathLength="100" strokeDasharray={`${group.value} ${100 - group.value}`} strokeDashoffset={-start} transform="rotate(-90 110 110)" />; })}</svg><div><strong><CountUp value={100} /><span>%</span></strong><span>Share ownership</span></div></div><dl>{groups.map((group) => <div key={group.label}><dt><i style={{ background: group.colour }} aria-hidden="true" />{group.label}</dt><dd><CountUp value={group.value} decimals={1} />%</dd></div>)}</dl></div>;
}
