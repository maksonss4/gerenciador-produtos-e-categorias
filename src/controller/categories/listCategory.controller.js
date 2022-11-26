import { listCategoryService } from "../../services/categories/listCategory.service";

export async function listCategoryController(req, res) {
  const { id } = req.params;

  try {
    const category = await listCategoryService(id);
    return res.status(200).json(category);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}
