import { listProductsBelongToCategoryService } from "../../services/products/listProductsBelongToCategory.service";

export async function listProductsBelongToCategoryController(req, res) {
  const { category_id } = req.params;

  try {
    const products = await listProductsBelongToCategoryService(category_id);
    return res.status(200).json(products);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}
