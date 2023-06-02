import React from 'react';
import FilePicker from './FilePicker';

const FileUploader = () => {
  const uploadedFileNames = ['1.png', '2.png', '3.png'];

  const uploadedFiles = uploadedFileNames.map((fileName) => ({
    name: fileName,
  }));

  const handleFileUpload = (file) => {
    // Logic to handle the file upload
    console.log('Uploaded file:', file);
  };

  return (
    <div>
      {/* Other components and content */}
      <FilePicker uploadedFiles={uploadedFiles} readFile={handleFileUpload} />
      {/* Other components and content */}
    </div>
  );
};

export default FileUploader;
