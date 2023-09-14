import React from "react";
import ItemDetail from "./ItemDetail";



const ItemDetailContainer = () => {
    const productos =[
        {id:1 ,nombre:"Gollum" ,descripcion: "descripcion de producto",categoria:"peliculas" ,precio:1000},
        {id:2 ,nombre:"Sauron" ,descripcion: "descripcion de producto",categoria:"peliculas" ,precio:1500},
        {id:3 ,nombre:"Producto C" ,descripcion: "descripcion de producto",categoria:"peliculas" ,precio:2000},
        {id:4 ,nombre:"Producto C" ,descripcion: "Flautas dulces",categoria:"video juegos" ,precio:2000},
        {id:5 ,nombre:"Producto C" ,descripcion: "descripcion de producto", categoria:"video juegos",precio:2000},
        {id:6 ,nombre:"Producto C" ,descripcion: "descripcion de producto",categoria:"otros" ,precio:2000},
        {id:7 ,nombre:"Producto C" ,descripcion: "descripcion de producto",categoria:"otros" ,precio:2000},
        {id:8 ,nombre:"Producto C" ,descripcion: "descripcion de producto",categoria:"otros" ,precio:2000},
      ]
      


  const getProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    } else {
      reject(new Error("No hay datos"));
    }
  });

  getProductos
  .then((res) =>{
  })
  .catch((error) =>{
    console.log(error);
  })

  return (
    <>
      <ItemDetail productos={productos}
      />
    </>
  );
};

export default ItemDetailContainer;