import React, { useCallback } from 'react';
import Dropzone, { useDropzone } from 'react-dropzone';

type ImportPageProps = {};

const ImportPage: React.FC<ImportPageProps> = ({}) => {
    const onDrop = useCallback((acceptedFiles) => {
        console.log('acceptedFiles: ', acceptedFiles);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Drop the files here ...</p>
            ) : (
                <p>Drag 'n' drop some files here, or click to select files</p>
            )}
        </div>
    );
};

export default ImportPage;
