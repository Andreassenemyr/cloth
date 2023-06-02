import React from 'react'

import CustomButton from './CustomButton'

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        
        

        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === '' ? "Ingen bild är vald" : file.name}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
      <input 
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Välj bild
        </label>
        <CustomButton 
          type="outline"
          title="Ladda upp"
          handleClick={() => readFile('logo')}
          customStyles="text-xs"
        />
        
      </div>
    </div>
  )
}

export default FilePicker