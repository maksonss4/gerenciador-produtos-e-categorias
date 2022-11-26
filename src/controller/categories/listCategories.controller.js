import { listCategoriesService } from "../../services/categories/listCategories.service";

export async function listCategoriesController(req, res) {
  try {
    const categories = await listCategoriesService();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}
