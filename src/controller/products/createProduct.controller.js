import { createProductService } from "../../services/products/createProduct.service";

export async function createProductController(req, res) {
  const { name, price, category_id } = req.body;

  try {
    const newProduct = await createProductService(name, price, category_id);
    return res.status(201).json({
      message: "Created",
      product: newProduct,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}
