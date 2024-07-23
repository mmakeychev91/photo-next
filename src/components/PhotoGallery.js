'use client';

import { useState } from 'react';
import { fetchPhotos } from '../services/api';
import styles from './PhotoGallery.module.css';

const PhotoGallery = ({ initialPhotos }) => {
    const [photos, setPhotos] = useState(initialPhotos);
    const [page, setPage] = useState(1);

    const loadMorePhotos = async () => {
        const newPage = page + 1;
        const newPhotos = await fetchPhotos(newPage);
        setPhotos([...photos, ...newPhotos]);
        setPage(newPage);
    };

    return (
        <div>
            <div className={styles.gallery}>
                {photos.map((photo) => (
                    <img key={photo.id} src={photo.urls.small} alt={photo.alt_description} />
                ))}
            </div>
            <button onClick={loadMorePhotos}>Показать еще</button>
        </div>
    );
};

export default PhotoGallery;