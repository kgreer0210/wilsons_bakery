// app/api/products/[id]/route.js
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(request, { params }) {
  try {
    const id = parseInt(params.id);
    await prisma.product.delete({
      where: { id: id },
    });
    return NextResponse.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { error: "Error deleting product" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
