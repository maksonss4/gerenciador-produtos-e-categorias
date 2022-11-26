import { deleteProducService } from "../../services/products/deleteProduct.service";

export async function deleteProductController(req, res) {
  const { id } = req.params;

  try {
    await deleteProducService(id);
    return res.status(204).send();
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}
