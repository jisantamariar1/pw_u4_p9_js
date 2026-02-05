import axios from 'axios'

//const tokenusuario ="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJtYXRyaWN1bGEtYXV0aCIsInN1YiI6IkNlc2FyIiwiZ3JvdXBzIjpbInVzZXIiXSwiaWF0IjoxNzcwMjQ5MDA2LCJleHAiOjE3NzAyNTI2MDYsImp0aSI6IjQzYzNjMTg2LTQ1YzUtNGE5ZC04MzYyLWExOTQxZTkwZmE0YiJ9.k4MG7O6DzTEt9FkRmszfCMq39r-SwvAu-_kOEl1by6cefDtPVu4zOrjnbc5RbMMUl0PUdvmMeExNJOkedIOcw3qr1qfukQ6LPTN7t8JIxUlEHeniHWxiPRHQOINBPc1zBRTaBSr2ntjMkxKOUzoWuHYJcL6pRcK0sJ65vFEJ7UdbaFh7oooK03VmduZrykA3Dc7pUzzm9CMM-cte6mhLMWDWN4lntgg-TDdzyn7ZU-UVzHRZcqCkeJYK8IbQwO6v3P__YdiYHfZt8F439BakrHLfi3B7k0GLYz54iyRYuScApdm5qzXxbMs1QKlmuUotVH_AfiaC-R9JaeUI7swEOQ";
//const token ="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJtYXRyaWN1bGEtYXV0aCIsInN1YiI6IkNhbWlsYSIsImdyb3VwcyI6WyJhZG1pbiJdLCJpYXQiOjE3NzAyNTAwODEsImV4cCI6MTc3MDI1MzY4MSwianRpIjoiN2Y2NTAzMGQtNGM2ZS00YTkyLTk4YzEtNjdlMTVmNWFmZGE4In0.gcuYiTBmJ2dMBMEJc8oqTgSUGxZv5Kw-VCu2GaVabVByb-lt4AYvk5VyRnV2U8MsgujdlLZfFxrz8QFTtujzkKslLfnQfc1m1BTKTY6HSAqa7HGMFwWRuLc3_9ov1GgnPu-mbft95ya2usAYNzldqO5a5R7FPe3D_tDuLNgbGbytOtguycRMKWzewzWXATBICLt2JgnZaKwHBAIEwPeK0php5XmE2ZMJgL0F3FZ7A_5-NzJ4-kbge8idFo0OBUtyVP4hqdcqd9mVqARdTfQWnTFkNZ7d-oo7GHAPzwk_csKIBh0RTI2uxbdAIZYLerbm0NIHILTjHF59G9g9kvBuaQ";
const getToken = () => localStorage.getItem("token")


//url
const baseURL = 'http://localhost:8081/matricula/api/v1.0/estudiantes';
const consultarTodos = async () => {
    const token = getToken()
    const data = await axios.get(`${baseURL}`,{headers:{Authorization: `Bearer ${token}`}}).then(r => r.data)
    return data
}
const consultarPorId = async (id) => {
    const token = getToken()
    const data = await axios.get(`${baseURL}/${id}`, {headers:{Authorization: `Bearer ${token}`}}).then(r => r.data)
    return data
}

const guardar = async (body) => {
    //data es lo que recibe desde el body
    /*const objeto ={
        nombre: 'Edison',
        apellido:'Cayambe'
    }*/
    const data = await axios.post(`${baseURL}`, body,{headers:{Authorization: `Bearer ${token}`}}).then(r => r.data);
    console.log(data)
    return data;
}
const actualizar = async (id,body) => {
    const data = await axios.put(`${baseURL}/${id}`, body,{headers:{Authorization: `Bearer ${token}`}}).then(r => r.data);
    console.log(data)
    return data;
}
const actualizarParcial = async (id,body) => {
    const data = await axios.patch(`${baseURL}/${id}`, body).then(r => r.data);
    console.log(data)
    return data;
}
const borrar =(id)=>{
    axios.delete(`${baseURL}/${id}`, {headers:{Authorization: `Bearer ${token}`}}).then(r=>r.data);
}

export async function consultarTodosFacade() {
    return await consultarTodos()
}
//----------------borrar fachada
export const consultarTodosFachada = async () => {
    return await consultarTodos();
}
export  const consultarPorIdFachada = async (id) => {
    return await consultarPorId(id);
}
export const guardarFachada =async  (body) => {
    return await guardar(body);
}
export  const actualizarFachada =async  (id,body) => {
    return await actualizar(id,body);
}
export const actualizarParcialFachada = async (id,body) => {
    return await actualizarParcial(id, body);
}
export const borrarFachada = async (id)=>{
    borrar(id);
}
