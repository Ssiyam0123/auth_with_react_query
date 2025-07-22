import currentUserInfo from '@/services/userService';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useCurrentUser = (email) => {
    return useQuery({
        queryKey:['user', email],
        queryFn: ()=> currentUserInfo(email),
        
    })
};

export default useCurrentUser;