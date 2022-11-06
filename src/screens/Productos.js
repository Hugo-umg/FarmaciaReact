import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { getProductosApi, getProductoDetalleApi } from "../api/farmacia";
import ProductosList from "../components/ProductosList";

export default function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    (async () => {
      await loadProductos();
    })();
  }, []);

  const loadProductos = async () => {
    try {
      const response = await getProductosApi();

      const productosArray = [];
      for await (const producto of response.results) {
        const productoDetalle = await getProductoDetalleApi(
          producto.idproducto
        );
        productosArray.push({
          idproducto: productoDetalle.idproducto,
          codigo: productoDetalle.codigo,
          descripcion: productoDetalle.descripcion,
          tipo: productoDetalle.tipo,
          stock: productoDetalle.stock,
          precioVenta: productoDetalle.precio_Venta,
          descuento: productoDetalle.descuento,
          idcategoria: productoDetalle.idcategoria,
          idSucursal: productoDetalle.idsucu_c,
          imagen_nombre: productoDetalle.imagen_nombre,
        });
      }

      setProductos([...productos, ...productosArray]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <ProductosList productos={productos} />
    </SafeAreaView>
  );
}
