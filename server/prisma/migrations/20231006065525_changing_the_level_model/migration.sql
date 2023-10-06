/*
  Warnings:

  - You are about to drop the column `completed` on the `Level` table. All the data in the column will be lost.
  - You are about to drop the column `result` on the `Level` table. All the data in the column will be lost.
  - You are about to drop the column `text` on the `Level` table. All the data in the column will be lost.
  - Added the required column `input` to the `Level` table without a default value. This is not possible if the table is not empty.
  - Added the required column `output` to the `Level` table without a default value. This is not possible if the table is not empty.
  - Added the required column `solution` to the `Level` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statement` to the `Level` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Level` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Level` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Level" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "statement" TEXT NOT NULL,
    "input" TEXT NOT NULL,
    "output" TEXT NOT NULL,
    "solution" TEXT NOT NULL
);
INSERT INTO "new_Level" ("createdAt", "id", "updateAt") SELECT "createdAt", "id", "updateAt" FROM "Level";
DROP TABLE "Level";
ALTER TABLE "new_Level" RENAME TO "Level";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
