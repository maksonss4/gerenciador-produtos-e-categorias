import database from "../../database";

export async function createCategorieService(name) {
  try {
    const res = await database.query(
      `INSERT INTO 
            categories (name)
        VALUES 
            ($1)
        RETURNING *;`,
      [name]
    );

    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
}
