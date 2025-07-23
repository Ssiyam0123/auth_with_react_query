import { getUsersAllPost } from '@/services/postServices';
import { useQuery } from '@tanstack/react-query';


const useUsersAllPost = (email,type) => {
    return useQuery({
        queryKey: ['posts', email],
        queryFn: ()=> getUsersAllPost(email,type)
    })
};

export default useUsersAllPost;