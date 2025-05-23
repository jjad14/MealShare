import fs from 'node:fs';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export async function getMeals() {
	// simulate a delay - development only
	// await new Promise((resolve) => setTimeout(resolve, 2000));

	// simulate an error - development only
	// throw new Error('Failed to fetch meals...');

	const stmt = db.prepare('SELECT * FROM meals');
	return stmt.all();
}

export function getMeal(slug) {
	const stmt = db.prepare('SELECT * FROM meals WHERE slug = ?');
	return stmt.get(slug);
}

export async function createMeal(meal) {
	// Will need to change to aws s3
	meal.slug = slugify(meal.title, { lower: true });
	meal.instructions = xss(meal.instructions);

	const extension = meal.image.name.split('.').pop();
	const filename = `${meal.slug}-${Date.now()}.${extension}`;

	const stream = fs.createWriteStream(`./public/images/${filename}`);
	const bufferedImage = await meal.image.arrayBuffer();
	stream.write(Buffer.from(bufferedImage), (error) => {
		if (error) {
			throw new Error('Saving image failed...');
		}
	});

	meal.image = `/images/${filename}`;

	const stmt = db.prepare(
		`INSERT INTO meals 
        (slug, title, image, summary, instructions, creator, creator_email) 
        VALUES (
        @slug,
        @title,
        @image,
        @summary,
        @instructions,
        @creator,
        @creator_email
        )`
	);
	stmt.run(meal);
}
