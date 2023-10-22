/*
  Warnings:

  - You are about to alter the column `type` on the `Level` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `Level` ADD COLUMN `tutorial` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `type` ENUM('MATCHONE', 'MATCHALL', 'REPLACE') NOT NULL;
