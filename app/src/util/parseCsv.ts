// utils/parseCsv.js
import Papa from 'papaparse';

export const parseCsv = async (path : any) => {
  const response = await fetch(path);
  const reader = response.body!.getReader();
  const result = await reader.read(); // raw array
  const decoder = new TextDecoder('utf-8');
  const csv = decoder.decode(result.value); // the csv text
  return new Promise((resolve, reject) => {
    Papa.parse(csv, {
      header: true,
      complete: (results) => {
        resolve(results.data);
      },
      error: (error : any) => reject(error.message),
    });
  });
};