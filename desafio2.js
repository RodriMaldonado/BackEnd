const fs = require('fs/promises');

class Products {
    constructor(ruta){
        this.ruta = ruta
    }


    async getAll(){
        try {
           const objs = await fs.readFile(this.ruta, 'utf-8');
            return JSON.parse(objs);
        } catch (error) {
            return []
    }
}

    async save(obj){
       try {
        const objs = await this.getAll();

        let newId;
        if(objs.length == 0) {
            newId = 1
        } else {
             newId = objs[objs.length -1].id + 1
        }
        
        const newObj = {id: newId, ...obj}
        objs.push(newObj);

        await fs.writeFile(this.ruta, JSON.stringify(objs, null, 2));
        
        return newId;
        
       } catch (error) {
            console.log('error al guardar')
       }e
    }

    async getById(id, newObj){
        try {
            const objs = await this.getAll();
            const indexObj = objs.findIndex((o) => o.id == id)

            if (indexObj == -1) {
                return 'Objeto no encontrado'
            } else {
                objs[indexObj] = {id, ...newObj};
                await fs.writeFile(this.ruta, JSON.stringify(objs, null, 2));

            }
            return {id, ...newObj};
        } catch (error) {
            console.log('error al actualizar')
        }
    }

    async deleteById(id){
      try {
        const objs = await this.getAll();
        const indexObj = objs.findIndex((o)=> o.id == id);

        if (indexObj == -1) {
            return 'Elemento no encontrado'
        } else {
            objs.splice(indexObj, 1);
            await await fs.writeFile(this.ruta, JSON.stringify(objs, null, 2));
        }
      
        
      } catch (error) {
        return 'No se pudo eliminar'
      } 
    }
     
    async deleteAll() {
   
    }

}

async function main(){
    const products= new Products('./DB/productos.txt');

    console.log('Consulta inicial');
    console.log(await products.getAll());
    console.log('Guarda productos')
    console.log(await products.save({title: "Smart Tv 50' Samsumg", price: "$70000.00", img:"https://samsungar.vtexassets.com/arquivos/ids/180361-1600-auto?width=1600&height=auto&aspect=true"}));
    console.log(await products.save({title: "Smart Tv 55' Lg", price: "$90000.00", img:"https://samsungar.vtexassets.com/arquivos/ids/180361-1600-auto?width=1600&height=auto&aspect=true"}));
    console.log('Obtiene por id')
    console.log(await products.getById(2, {title: "Smart Tv 75' Sony", price: "$170.000,00", img:"https://samsungar.vtexassets.com/arquivos/ids/180361-1600-auto?width=1600&height=auto&aspect=true"}));
    console.log('Consulta productos')
    console.log(await products.getAll());
    console.log('Elimina productos')
    console.log(products.deleteById(1));
    console.log('Consulta productos')
    console.log(await products.getAll());
    console.log('Guarda productos')
    console.log(await products.save({title: "Smart Tv 50' Samsumg", price: "$70000.00", img:"https://samsungar.vtexassets.com/arquivos/ids/180361-1600-auto?width=1600&height=auto&aspect=true"}));
    console.log('Consulta productos')
    console.log(await products.getAll());
    console.log(await products.deleteAll());
}
main();