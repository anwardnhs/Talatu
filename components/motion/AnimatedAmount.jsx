import { CountUp } from "@/components/motion/CountUp";

export function AnimatedAmount({ value }) {
  const match = String(value).match(/^([^\d]*)([\d.]+)(.*)$/);
  if (!match) return value;
  const [, prefix, amount, suffix] = match;
  const decimals = amount.split(".")[1]?.length || 0;
  return <>{prefix}<CountUp value={Number(amount)} decimals={decimals} />{suffix}</>;
}
