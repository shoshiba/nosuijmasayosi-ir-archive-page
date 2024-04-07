

export const generateCsvPath = (irNumber: number, level: number) => {


  const csvFiles: string[] = [
      "9_result",
      "10_result",
      "11_result",
      "12_result",
      "gm_result",
    ];
    return `/csv/${irNumber}/${csvFiles[level]}.csv`;
}