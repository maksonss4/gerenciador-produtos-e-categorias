import database from "../../database";

export async function listCategoriesService() {
  try {
    const res = await database.query(`SELECT * FROM categories c ;`);

    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
}
