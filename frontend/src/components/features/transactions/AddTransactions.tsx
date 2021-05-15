import { Button } from '@material-ui/core';
import { InputBase, Typography } from '@material-ui/core';
import React, { ChangeEvent, useRef, useState } from 'react';
import { xlsxToJson } from '../../../utils/fileToJson';

type AddTransactionsProps = {};

const AddTransactions: React.FC<AddTransactionsProps> = ({}) => {
    const inputRef = useRef();
    const [fileData, setFileData] = useState<unknown[]>([]);

    const handleNewFileInput = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.length ? event.target.files[0] : undefined;
        if (!file) {
            return;
        }

        setFileData(xlsxToJson(file));
    };

    return (
        <>
            <Typography>Add transactions page</Typography>
            <InputBase
                type="file"
                id="file-input"
                inputRef={inputRef}
                inputProps={{ accept: '.xlsx' }}
                onChange={handleNewFileInput}
            />
            <Button type="submit" variant="contained">
                Upload transaction data to account...
            </Button>
        </>
    );
};

export default AddTransactions;
