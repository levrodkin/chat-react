import React, { FC } from 'react';
import './SendFile.scss';
import classNames from 'classnames';

interface SendFileProps {
  className?: string;
}

const SendFile: FC<SendFileProps> = ({ className = '' }) => {
  const classProps = classNames('sendFile', className);
  const handleFile = (file: React.ChangeEvent<HTMLInputElement>) => {
    if (file.target.files![0].size > 2097152) {
      alert('the file must be less than 2MB');
      return 1;
    }
    const ext = file.target.files![0].type;
    if (
      ext === 'video/mp4' ||
      ext === 'video/ogg' ||
      ext === 'video/webm' ||
      ext === 'audio/mpeg' ||
      ext === 'audio/ogg' ||
      ext === 'image/jpeg' ||
      ext === 'image/gif' ||
      ext === 'image/png' ||
      ext === 'image/svg+xml'
    ) {
      alert('easy!');
      const formdata = new FormData();
      // formdata.append('files', file);
      // formdata.append('name', file.target.files![0].name);
      // formdata.append('type', file.target.files![0].type);
      // formdata.append('size', String(file.target.files![0].size));
      fetch('http://109.194.37.212:93/api/upload', {
        method: 'POST',
        body: formdata,
      }).then((res) => console.log(res));
      return 1;
    }
    alert('fail');
    return 1;
  };

  return (
    <>
      <label className={classProps} htmlFor="upload-file">
        <input
          id="upload-file"
          type="file"
          onChange={handleFile}
        />
      </label>
    </>
  );
};

export default SendFile;
