import { api } from '../../api';
import {
  getPhotosStarted,
  getPhotosSuccess,
  getPhotosFailed,
  setTotalPhotos,
} from '../actionCreators/photos';
export const getPhotos = (page = 1) => {
  return async (dispatch, getState) => {
    try {
      const store = getState();
      if (page === 1) dispatch(getPhotosStarted());

      const responce = await api.photos.getPhotos({
        params: {
          _page: page,
          _limit: 5,
        },
      });

      /* Надо узнать как добавлять  x-total-count в headers */
      if (page === 1) {
        /* dispatch(setTotalPhotos(responce.headers['x-total-count'])); */
        dispatch(setTotalPhotos(100)); // рыба на время
        dispatch(getPhotosSuccess([...responce.data]));
      } else {
        /* dispatch(setTotalPhotos(responce.headers['x-total-count'])); */
        dispatch(setTotalPhotos(100)); // рыба на время
        dispatch(getPhotosSuccess([...store.photos.photos, ...responce.data]));
      }
    } catch (error) {
      dispatch(getPhotosFailed(error));
    }
  };
};
