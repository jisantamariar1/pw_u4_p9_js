import axios from 'axios'
const Obtenertoken = async () => {
    const data = await axios.get(`http://localhost:8082/api/v1.0/auth/token?user=Camila&password=1234`).then(r => r.data)
    return data
}
export const ObtenerTokenFachada = async () => {
    return await Obtenertoken()
}