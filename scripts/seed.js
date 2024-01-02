const { db } = require('@vercel/postgres');
const { users, talents } = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, first_name, last_name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.first_name}, ${user.last_name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedTalent(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "customers" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS talents (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        image_url VARCHAR(255) NOT NULL,
        bio VARCHAR(255) NOT NULL,
        talent VARCHAR(255) NOT NULL,
        external_link VARCHAR(255),
        rating DECIMAL(3,1) NOT NULL
      );
    `;

    console.log(`Created "talents" table`);

    // Insert data into the "talents" table
    const insertedTalent = await Promise.all(
      talents.map(
        (talent) => client.sql`
        INSERT INTO talents (id, name, email, image_url, bio, talent, external_link, rating)
        VALUES (${talent.id}, ${talent.name}, ${talent.email}, ${talent.image_url}, ${talent.bio}, ${talent.talent}, ${talent.external_link}, ${talent.rating})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedTalent.length} talents`);

    return {
      createTable,
      talents: insertedTalent,
    };
  } catch (error) {
    console.error('Error seeding talent:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedTalent(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
