'use client';

import { useRef, useState } from 'react';
import styles from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({ label, name }) {
	const [pickedImage, setPickedImage] = useState(null);
	const imageInputRef = useRef();

	const handlePickerClick = () => {
		imageInputRef.current.click();
	};

	const handleImageChange = (event) => {
		const file = event.target.files[0];

		// If no file is selected, do nothing
		if (!file) {
			setPickedImage(null);
			return;
		}

		const fileReader = new FileReader();
		// Once the file is loaded, this function is called with the
		// file's contents as a data URL. This is then used to set the
		// component's state, which will cause the component to render
		// the image preview.
		fileReader.onload = () => {
			setPickedImage(fileReader.result);
		};

		// Read the file as a data URL
		fileReader.readAsDataURL(file);
	};

	return (
		<div className={styles.picker}>
			<label htmlFor={name}>{label}</label>
			<div className={styles.controls}>
				<div className={styles.preview}>
					{!pickedImage && <p>No image picked yet.</p>}
					{pickedImage && (
						<Image src={pickedImage} alt='Selected image' fill />
					)}
				</div>
				<input
					className={styles.input}
					type='file'
					id={name}
					accept='image/png, image/jpeg'
					name={name}
					ref={imageInputRef}
					onChange={handleImageChange}
					required
				/>
				<button
					className={styles.button}
					type='button'
					onClick={handlePickerClick}>
					Select an Image
				</button>
			</div>
		</div>
	);
}
