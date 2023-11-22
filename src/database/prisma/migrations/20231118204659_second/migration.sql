/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `scholar` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "scholar_userId_key" ON "scholar"("userId");
