import * as XLSX from 'xlsx';

export const xlsxToJson = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
        const data = e.target?.result;
        let readData = XLSX.read(data, { type: 'binary' });
        const wsname = readData.SheetNames[0];
        const ws = readData.Sheets[wsname];

        /* Convert array to json*/
        const parsedData = XLSX.utils.sheet_to_json(ws, { header: 1 });
        console.log(parsedData);
        console.log('header: ', parsedData[0]);
        return parsedData;
    };

    return reader.readAsBinaryString(file);
};
