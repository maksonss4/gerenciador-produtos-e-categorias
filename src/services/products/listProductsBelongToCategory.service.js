import database from "../../database";

export async function listProductsBelongToCategoryService(id) {
  try {
    const res = await database.query(
      `SELECT
      p.name,
      p.price,
      c.name category
    FROM
      products p
    JOIN 
      categories c ON c.id = p.category_id 
    WHERE p.category_id = $1;`,
      [id]
    );

    if (res.rowCount === 0) {
      throw new Error("Not exists");
    }

    return res.rows;
  } catch (error) {
    throw new error(error.message);
  }
}
