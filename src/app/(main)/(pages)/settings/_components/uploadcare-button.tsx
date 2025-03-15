'use client' // is needed only if you’re using React Server Components
import React from 'react'
import { FileUploaderRegular } from '@uploadcare/react-uploader/next';
import '@uploadcare/react-uploader/core.css';
type Props = {}

const UploadCareButton = (props: Props) => {
  return (
    <div>
        <FileUploaderRegular
         sourceList="local, camera, facebook, gdrive"
         cameraModes="photo, video"
         classNameUploader="uc-dark uc-gray"
         pubkey="ed948e19ea1bcd5ab51a"
      />
    </div>
  )
}
export default UploadCareButton