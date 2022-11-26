import { listProductService } from "../../services/products/listProducts.service";

export async function listProductsController(req, res) {
  try {
    const products = await listProductService();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}
