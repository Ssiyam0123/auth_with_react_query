import { addLike } from '@/services/postServices';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useAddLike = () => {
    const queryClinet= useQueryClient()
    return useMutation({
        mutationFn: ({id, email})=> addLike(id,email),
        onSuccess: ()=>{
            queryClinet.invalidateQueries({queryKey: ['posts']})

        }
    })
};

export default useAddLike;