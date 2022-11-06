import { API_HOST } from "../utils/constantes";

export async function getProductosApi() {
  try {
    const url = `${API_HOST}/Productos`;
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}

export async function getProductoDetalleApi(idproducto) {
  try {
    const url = `${API_HOST}/Productos/${idproducto}`;
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}
