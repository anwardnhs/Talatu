import { getPersonRole } from "@/data/person-roles";

export function PersonRole({ name, title }) {
  const { appointment } = getPersonRole(name, title);
  return <div className="person-role"><p>{appointment}</p></div>;
}
