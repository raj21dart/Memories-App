import axios from 'axios'

const API = axios.create({ baseURL: 'https://5000-brown-cockroach-h4u21vfg.ws-us09.gitpod.io'})

// const url = 'https://memories21.herokuapp.com/posts'

export const fetchPosts = () => API.get('/posts')
export const createPost = (newPost) => API.post('/posts', newPost)
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost)
export const deletePost = (id) => API.delete(`/posts/${id}`)
export const likePost = (id) => API.patch(`/posts/${id}/likePost`)

export const signIn = (formData) => API.post('/user/sigin', formData)
export const signUp = (formData) => API.post('/user/signup', formData)