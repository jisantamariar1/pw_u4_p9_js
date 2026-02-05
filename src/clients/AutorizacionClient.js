import axios from 'axios'
const Obtenertoken = async () => {
    const data = await axios.get(`http://localhost:8082/api/v1.0/auth/token?user=admin&password=123`).then(r => r.data)
    return data
}
export const ObtenerTokenFachada = async () => {
    return await Obtenertoken()
}