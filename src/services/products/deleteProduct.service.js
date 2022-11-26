import database from "../../database";

export async function deleteProducService(id) {
  try {
    const res = await database.query(
      `DELETE FROM products p WHERE id = $1 RETURNING *;`,
      [id]
    );

    if (res.rowCount === 0) {
      throw new Error("Not exists");
    }

    return res.rows[0];
  } catch (error) {
    throw new Error(error.message);
  }
}
