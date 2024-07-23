import { fetchPhotos } from '../services/api';
import PhotoGallery from '../components/PhotoGallery';
import Header from '../components/Header';

export default async function Home() {
  const initialPhotos = await fetchPhotos();

  return (
    <>
      <Header />
      <main>
        <h1>Добро пожаловать на наш сайт</h1>
        <PhotoGallery initialPhotos={initialPhotos} />
      </main>
    </>
  );
}
