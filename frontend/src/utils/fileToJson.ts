import * as XLSX from 'xlsx';

export const xlsxToJson = async (file: File, callback: (data: unknown[]) => void) => {
    const reader = new FileReader();
    // let parsedData: unknown[];
    reader.readAsBinaryString(file);

    reader.onload = (e) => {
        const data = e.target?.result;
        let readData = XLSX.read(data, { type: 'binary' });
        const wsname = readData.SheetNames[0];
        const ws = readData.Sheets[wsname];

        /* Convert array to json*/
        const parsedData = XLSX.utils.sheet_to_json(ws, { header: 1 });
        callback(parsedData);
    };
};
