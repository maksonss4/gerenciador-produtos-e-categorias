import { deleteCategoryService } from "../../services/categories/deleteCategory.service";

export async function deleteCategoryController(req, res) {
  const { id } = req.params;

  try {
    await deleteCategoryService(id);
    return res.status(204).send();
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}
