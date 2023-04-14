import axios from "axios";


const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzRlZGViYjgxZGFkZjNmNzg3MDQzOTZjZGUzYTc5OSIsInN1YiI6IjY0MzVlOGE0OWFjNTM1MDA5ZDM3YzgwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.89-v_CAVYpp45NlQLellL6cgSA5oB1dkfZa7GxKSzx4'
    }
})

export default apiFilmes