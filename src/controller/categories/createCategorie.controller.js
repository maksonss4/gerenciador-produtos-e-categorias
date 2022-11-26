import { createCategorieService } from "../../services/categories/createCategorie.service";

export async function createCategorieController(req, res) {
  const { name } = req.body;

  try {
    const newCategorie = await createCategorieService(name);
    return res.status(201).json({
      message: "Created",
      category: newCategorie,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}
