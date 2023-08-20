import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getAllMedias() {
  const notes = await prisma.media.findMany();
  return notes;
}

export async function GET() {
  const medias = await getAllMedias();
  return NextResponse.json(medias);
}