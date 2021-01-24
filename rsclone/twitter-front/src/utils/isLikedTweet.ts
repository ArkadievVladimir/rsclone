import { User } from '../store/ducks/user/contracts/state';

export function isLiked(data: User | undefined, like: string[]) {
    if (data && data._id) {
        let likedTweetIndex = like.indexOf(data._id);
        if (likedTweetIndex === -1) {
            like.push(data._id);
            return false;
        } else {
            like.splice(likedTweetIndex, 1);
            return true;
        }
    }
}
