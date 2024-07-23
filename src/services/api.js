import axios from 'axios';

const API_URL = 'https://api.unsplash.com';
const ACCESS_KEY = 'ZrrDn89vafbIvtpbM1qOLR9jEpkWP6yYxAUBeTDLtfc'; // Замените на ваш ключ доступа

export const fetchPhotos = async (page = 1) => {
    try {
        const response = await axios.get(`${API_URL}/photos`, {
            params: {
                client_id: ACCESS_KEY,
                page: page,
                per_page: 4,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching photos:', error);
        return [];
    }
};
