import {
  GET_PHOTOS_FAILED,
  GET_PHOTOS_STARTED,
  GET_PHOTOS_SUCCESS,
  SET_TOTAL_PHOTOS,
} from '../actionCreators/photos';
const initialState = {
  photos: [],
  isLoading: false,
  error: null,
  totalPhotos: 0,
};

export const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PHOTOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        photos: action.payload,
      };
    case GET_PHOTOS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case SET_TOTAL_PHOTOS:
      return {
        ...state,
        totalPhotos: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
