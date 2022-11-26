import database from "../../database";

export async function updateProductService(id, data) {
  try {
    let query = "UPDATE products SET ";
    const keys = Object.keys(data);
    const values = Object.values(data);

    keys.forEach((ele, i) => {
      query += `${ele} = \$${i + 1}, `;
    });

    query = query.slice(0, -2);

    query += ` WHERE id = \$${keys.length + 1} RETURNING *;`;

    const res = await database.query(query, [...values, id]);

    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
}
