import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { User, TalentType } from './definitions';

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function fetchAllHires() {
  noStore();
  try {
    const data = await sql<TalentType>`
    SELECT
     		  talents.id,
    		  talents.name,
     		  talents.image_url,
          talents.talent,
          talents.rating
    		FROM talents
    `;

    const hires = data.rows;
    return hires;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all talents.');
  }
}

export async function fetchHireByTalent(talent: string) {
  noStore();
  try {
    const data = await sql<TalentType>`
    SELECT
      talents.id,
      talents.name,
      talents.image_url,
      talents.talent,
      talents.rating
    FROM talents
    WHERE talents.talent = ${talent};
    `;

    const hireByTalent = data.rows;

    return hireByTalent;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch hire by talent.');
  }
}

export async function fetchHireById(id: string) {
  noStore();
  try {
    const data = await sql<TalentType>`
    SELECT
      talents.id,
      talents.name,
      talents.email,
      talents.pseudo_email,
      talents.image_url,
      talents.bio,
      talents.talent,
      talents.external_link,
      talents.rating
    FROM talents
    WHERE talents.id = ${id};
    `;

    const hireById = data.rows.map((hire) => ({
      ...hire,
    }));
    return hireById[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch hire by ID.');
  }
}

export async function fetchFilteredResults(query: string) {
  noStore();
  try {
    const results = await sql<TalentType>`
		SELECT
		  talents.id,
		  talents.name,
		  talents.image_url,
      talents.talent,
      talents.rating
		FROM talents
		WHERE
		  talents.name ILIKE ${`%${query}%`} OR
      talents.talent ILIKE ${`%${query}%`}
    `;

    return results.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch results.');
  }
}
