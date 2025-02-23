import axios from "axios";


const BASE_URL = "http://localhost:3000/api/"
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YjgzNTUyM2JkMDZiZjUwMjEzNTc2YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTc0MDIwNjA4OSwiZXhwIjoxNzQwNDY1Mjg5fQ.JHRPQyT9GrYwrfjeSoOZ2BXiwpzm9WVkskYvniuatRw"

// for fetching data
export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})