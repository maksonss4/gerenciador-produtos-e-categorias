import { updateProductService } from "../../services/products/updateProduct.service";

export async function updateProductController(req, res) {
  const { id } = req.params;
  const data = req.body;

  try {
    const updatedProduct = await updateProductService(id, data);
    return res.status(200).json({
      message: "Product updated",
      product: updatedProduct,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}
