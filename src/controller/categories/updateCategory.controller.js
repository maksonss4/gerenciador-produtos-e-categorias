import { updateCategoryService } from "../../services/categories/updateCategory.service";

export async function updateCategoryController(req, res) {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updatedCategory = await updateCategoryService(id, name);
    return res.status(200).json({
      message: "Category updated",
      category: updatedCategory,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}
