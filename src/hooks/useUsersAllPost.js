import { getUsersAllPost } from '@/services/postServices';
import { useQuery } from '@tanstack/react-query';


const useUsersAllPost = (email) => {
    return useQuery({
        queryKey: ['posts', email],
        queryFn: ()=> getUsersAllPost(email)
    })
};

export default useUsersAllPost;