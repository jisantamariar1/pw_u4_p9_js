import axios from 'axios'
const Obtenertoken = async (user,password) => {
    const data = await axios.get(`http://localhost:8082/api/v1.0/auth/token?user=${user}&password=${password}`).then(r => r.data)
    return data
}
export const ObtenerTokenFachada = async (user, password) => {
    return await Obtenertoken(user, password)
}