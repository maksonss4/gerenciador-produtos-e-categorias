import { Router } from "express";
import { createCategorieController } from "../controller/categories/createCategorie.controller";
import { deleteCategoryController } from "../controller/categories/deleteCategory.controller";
import { listCategoriesController } from "../controller/categories/listCategories.controller";
import { listCategoryController } from "../controller/categories/listCategory.controller";
import { updateCategoryController } from "../controller/categories/updateCategory.controller";
import { createProductController } from "../controller/products/createProduct.controller";
import { deleteProductController } from "../controller/products/deleteProduct.controller";
import { listProductController } from "../controller/products/listProduct.controller";
import { listProductsController } from "../controller/products/listProducts.controller";
import { listProductsBelongToCategoryController } from "../controller/products/listProductsBelongToCategory.controller";
import { updateProductController } from "../controller/products/updateProduct.controller";

export const routeCategories = Router();
routeCategories.get("/categories", listCategoriesController);
routeCategories.post("/categories", createCategorieController);
routeCategories.get("/categories/:id", listCategoryController);
routeCategories.patch("/categories/:id", updateCategoryController);
routeCategories.delete("/categories/:id", deleteCategoryController);

export const routeProducts = Router();
routeProducts.get("/products", listProductsController);
routeProducts.post("/products", createProductController);
routeProducts.get("/products/:id", listProductController);
routeProducts.patch("/products/:id", updateProductController);
routeProducts.delete("/products/:id", deleteProductController);
routeProducts.get(
  "/products/category/:category_id",
  listProductsBelongToCategoryController
);
//Retorna os dados dos produtos pertencentes a categoria dona do id
