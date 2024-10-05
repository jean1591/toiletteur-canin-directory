/*
  Warnings:

  - The primary key for the `OpeningHour` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Review` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `googleId` to the `Place` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OpeningHour" DROP CONSTRAINT "OpeningHour_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "OpeningHour_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "OpeningHour_id_seq";

-- AlterTable
ALTER TABLE "Place" ADD COLUMN     "googleId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Review" DROP CONSTRAINT "Review_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Review_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Review_id_seq";
