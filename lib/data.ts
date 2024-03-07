import { prisma } from "@/lib/prisma";

const ITEMS_PER_PAGE = 5;

export const getCVs = async (query: string, currentPage: number) => {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    // await new Promise((resolve) => setTimeout(resolve, 3000))
    const cvs = await prisma.cv.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE,
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            phone: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            gender: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            techStack: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    return cvs;
  } catch (error) {
    throw new Error("Failed to fetch cv data");
  }
};

export const getCVById = async (id: string) => {
  try {
    const cv = await prisma.cv.findUnique({
      where: { id },
    });
    return cv;
  } catch (error) {
    throw new Error("Failed to fetch cv data");
  }
};

export const getCVPages = async (query: string) => {
  try {
    const cvs = await prisma.cv.count({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            phone: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            gender: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            techStack: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    const totalPages = Math.ceil(Number(cvs) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    throw new Error("Failed to fetch cv data");
  }
};