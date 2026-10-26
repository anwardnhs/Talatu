// Separate appointment, committee and representation information for readable cards.
export const boardResponsibilities = {
  "Dr. Bukola Adewale": ["Lead Independent Director", "Audit Committee Chair"],
  "Goni Bukar": ["Independent Director", "Governance & Nomination Committee Chair"],
  "Obinna Ezeh": ["Independent Director", "Risk Committee Chair"],
  "Hadiza Yerima": ["Independent Director", "Remuneration Committee Chair"],
  "Angela Nwana": ["Independent Director", "Editorial Committee Chair"],
  "Amira Alhassan": ["Non-Executive Director", "Represents the Alhassan Family Office"],
  "Emeka Anyanwu": ["Non-Executive Director", "Represents minority shareholders"],
};

export function getPersonRole(name, fallback) {
  const [appointment, responsibility] = boardResponsibilities[name] || [fallback];
  return { appointment, responsibility };
}

