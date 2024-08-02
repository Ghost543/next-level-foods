'use client';

import React, {FC, useRef, useState} from 'react';

import classes from './image-picker.module.css';
import Image from "next/image";

const ImagePicker:FC<{label: string, name: string}> = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>(null);
  const imageInput = useRef<HTMLInputElement | null>(null);

  const handlePickClick = () => {
    imageInput.current?.click();
  }

  const handleImageChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    const file = files[0];
    if (!file) return;
    const reader = new FileReader();

    reader.onload = () => {
      const gg = reader.result;
      setPickedImage(gg)
    };

    reader.readAsDataURL(file);
  }



  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && (<p>No image picked yet</p>)}
          {pickedImage && (
              // @ts-ignore
              <Image src={pickedImage} alt="The imagselected"  fill/>
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;