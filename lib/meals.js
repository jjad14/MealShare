import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
	// simulate a delay - development only
	// await new Promise((resolve) => setTimeout(resolve, 2000));

	// simulate an error - development only
	// throw new Error('Failed to fetch meals...');

	const stmt = db.prepare('SELECT * FROM meals');
	return stmt.all();
}
