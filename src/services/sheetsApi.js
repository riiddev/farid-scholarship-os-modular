export const SHEET_ID = '1A2Nnjd0WYs1Y5PRzoBPEOC0UD9bx3oEfUBeyTGZanJc';

export async function syncWithGoogleSheet(appsScriptUrl = '') {
  const url = appsScriptUrl || `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error('Sheet belum di-publish ke web');
  return await res.text();
}
