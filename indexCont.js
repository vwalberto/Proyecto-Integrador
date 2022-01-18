let lista = [
    {
        id: 1,
        nombre: "Maceta",
        descripcion: "Maceta 3D color marron",
        precio: 500.000,
        imgPath: "producto1.jpg"
    },
    {
        id: 2,
        nombre: "Apoya vasos",
        descripcion: "Apoya vasos 3D para automovil",
        precio: 600.000,
        imgPath: "producto2.jpg"
    },
    {
        id: 3,
        nombre: "Soporte Notebook",
        descripcion: "Soporte notebook 3D color natranja",
        precio: 50.000,
        imgPath: "soporte1.jpg"
    },
         ]
const controlador = 
{	
    index: (req, res) => {
        res.render("index", {productos:lista});
},
detail: (req, res) => {	
    let id = req.params.id;
    let productoEncontrado;

    for (let i=0;i<lista.length;i++){
        if (lista[i].id==id){
            productoEncontrado=lista[i];
            break;
        }
    }

    res.render('detalleLista',{productoDetalle: productoEncontrado});
}
}


//un rutador y un controlador para c/u

module.exports = controlador;