"use client"

import React, { useState, useEffect } from 'react';
import { BasicTable } from "./component/BasicTable"
import { parseCsv} from './component/util/parseCsv'
import  DataTable  from './component/DataTable'

const columns = [
  { Header: 'JYUNI', accessor: 'JYUNI' },
  { Header: 'PLAYER NAME', accessor: 'PLAYER NAME' },
  { Header: '☆9↓', accessor: '☆9↓' },
  { Header: '☆10', accessor: '☆10' },
  { Header: '☆11', accessor: '☆11' },
  { Header: '☆12', accessor: '☆12' },
  { Header: 'TOTAL', accessor: 'TOTAL' },
  { Header: 'RATE', accessor: 'RATE' },
  { Header: 'RANK', accessor: 'RANK' },
  { Header: 'RANK+', accessor: 'RANK+' },
  { Header: 'NEXT', accessor: 'NEXT' },
];


export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await parseCsv('/csv/gm_result.csv');
      console.log(result)
      setData(result);
    }
    fetchData();
  })


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DataTable columns = {columns} data= {data} />
    </main>

  );
}
