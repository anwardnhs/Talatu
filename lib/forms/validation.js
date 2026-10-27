export function validateForm(values, fields) {
  const errors = {};
  for (const [name, rule] of Object.entries(fields)) {
    const value = String(values[name] || "").trim();
    if (!value && rule.required) errors[name] = rule.required;
    else if (value && rule.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) errors[name] = "Enter an email address such as name@company.com.";
    else if (value && rule.min && value.length < rule.min) errors[name] = rule.message;
  }
  return errors;
}
