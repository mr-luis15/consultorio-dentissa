const url_api = import.meta.env.VITE_API_URL


export async function post(endpoint: string, datos: object) {

    
    const respuesta = await fetch(url_api + endpoint, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const respuesta_json = await respuesta.json();

    if (!respuesta.ok) {
        console.log(respuesta_json);
        throw new Error(respuesta_json);
    }

    return {data: respuesta_json, error: null};
}








export function get(endpoint : string, id? : number): Promise<Response> {

    const path = id ? `${endpoint}/${id}` : endpoint;

    console.log(url_api + path);

    try {
        return fetch(url_api + path, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        throw new Error('No se pudo conectar al servidor');
    }

}