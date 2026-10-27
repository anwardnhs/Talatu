export function parseInvestorQuery(url) {
  if (url.length > 1024) return { error: 'Request address is too long.', status: 414 };
  const { searchParams } = new URL(url);
  const entries = [...searchParams];
  if (entries.some(([key]) => !['dataset', 'format'].includes(key)) || ['dataset', 'format'].some(key => searchParams.getAll(key).length > 1)) {
    return { error: 'Use one dataset and one format parameter.', status: 400 };
  }
  const dataset = searchParams.get('dataset') ?? 'overview';
  const format = searchParams.get('format') ?? 'json';
  if (!['overview', 'financials', 'shareholders', 'revenue'].includes(dataset) || !['json', 'csv'].includes(format)) return { error: 'Unknown dataset or format.', status: 400 };
  if (dataset === 'overview' && format === 'csv') return { error: 'Choose financials, revenue or shareholders for CSV export.', status: 400 };
  return { dataset, format };
}
