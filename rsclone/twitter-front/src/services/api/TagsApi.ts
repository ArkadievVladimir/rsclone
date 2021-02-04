import axios from 'axios';
import { TagsState } from '../../store/ducks/tags/contracts/state';
import { BACKEND_URL } from '../backendUrl';

export const TagsApi = {
    fetchTags(): Promise<TagsState['items']> {
        return axios.get(`${BACKEND_URL}/tags`)
        .then(({data}) => data);
    }
};
