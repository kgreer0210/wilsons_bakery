// scripts/migrateData.js
import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";
import fs from "fs/promises";
import path from "path";

const prisma = new PrismaClient();

async function migrateUsers() {
  const usersData = JSON.parse(
    await fs.readFile(path.join(process.cwd(), "data", "users.json"), "utf8")
  );

  for (const user of usersData) {
    const hashedPassword = await hash(user.password, 10);
    await prisma.user.create({
      data: {
        username: user.username,
        password: hashedPassword,
      },
    });
  }

  console.log("Users migrated successfully");
}

async function migrateProducts() {
  const productsData = JSON.parse(
    await fs.readFile(
      path.join(process.cwd(), "data", "bakeryItems.json"),
      "utf8"
    )
  );

  for (const product of productsData) {
    await prisma.product.create({
      data: {
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
      },
    });
  }

  console.log("Products migrated successfully");
}

async function main() {
  try {
    await migrateUsers();
    await migrateProducts();
  } catch (error) {
    console.error("Error during migration:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
