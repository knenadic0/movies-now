import { movieDBImageUrl } from '@constants/strings';

export const getImageUrl = (url: string) => `${movieDBImageUrl}${url}`;
