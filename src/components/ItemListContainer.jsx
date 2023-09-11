import React from 'react'
import ItemList from './ItemList';


const ItemListContainer = ({ greeting}) => {
  const productos =[
    {id:1 ,nombre:"Gollum" ,descripcion: "descripcion de producto",precio:1000},
    {id:2 ,nombre:"Producto B" ,descripcion: "descripcion de producto",precio:1500},
    {id:3 ,nombre:"Producto C" ,descripcion: "descripcion de producto",precio:2000},
    {id:4 ,nombre:"Producto C" ,descripcion: "Flautas dulces",precio:2000},
    {id:5 ,nombre:"Producto C" ,descripcion: "descripcion de producto",precio:2000},
    {id:6 ,nombre:"Producto C" ,descripcion: "descripcion de producto",precio:2000},
    {id:7 ,nombre:"Producto C" ,descripcion: "descripcion de producto",precio:2000},
    {id:8 ,nombre:"Producto C" ,descripcion: "descripcion de producto",precio:2000},
  ]
  



const getProductos = new Promise((resolve, reject) => {
  if (productos.length > 0) {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  } else {
    reject(new Error("No hay mas datos"));
  }
});

getProductos
.then((res) => {})
.catch((error) => {
  console.log(error);
});



return (
  <>
    <ItemList productos={productos} />  </>
);
};


export default ItemListContainer