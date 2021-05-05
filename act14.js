// Proceso 1: Comprar Casco, duración: 1 segundo
// Proceso 2: Comprar guantes, duración 2 segundos
// Proceso 3: Ir de paseo en bici: 8 segundos:
const comprarCasco = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("comprar casco")
        }, 1000)
    })
}

const comprarguantes = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("comprar guantes")
        }, 2000)
    })
}

const irpaseo = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("paseando")
        }, 8000)
    })
}

const pasearEnBici = async () =>{
    const casco = await comprarCasco();
    const guantes = await comprarguantes();
    const paseo = await irpaseo();
    return([casco,guantes,paseo])
}

pasearEnBici().then(res => console.log(res));