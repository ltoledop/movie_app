import pg from 'pg';
const { Client }= pg;

const config={
    user: 'movies_bd',
    host: 'dpg-csaqtvo8fa8c73crvpa0-a.oregon-postgres.render.com',
    database: 'movies_bd_ityp',
    password: 'MqekCbV7S2ppWsT25IOwcgUXeOt0V3FS',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
}

export async function Conectar(params) {
    const cliente= new Client(config)
    try{
        await cliente.connect()
        console.log("Conectado a la base de Datos")
    }catch(error){
        console.log(error)
    }
}