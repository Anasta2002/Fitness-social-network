import axios from 'axios';


const instance = axios.create(
    {
        withCredentials: true,
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        headers: {
            'API-KEY': '738defbc-c40d-48cd-aa65-f1d9abf31d74',
        }
    }
);

export const usersAPI = {
    getUsers(currentPage, pageSize) {return instance.get(`users?page=${currentPage}&count=${pageSize}`)},
    unfollowAPI(userId) {return instance.delete(`follow/${userId}`)},
    followAPI(userId) {return instance.post(`follow/${userId}`)},
    getProfile(userId) {return instance.get(`profile/${userId}`  + userId)},
}

export const authAPI = {
    me() {
        return instance.get(`/auth/me`)
    }
}