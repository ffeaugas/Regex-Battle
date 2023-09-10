-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Level" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    "text" TEXT,
    "result" TEXT,
    "completed" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Level" ("completed", "createdAt", "id", "result", "text", "updateAt") SELECT "completed", "createdAt", "id", "result", "text", "updateAt" FROM "Level";
DROP TABLE "Level";
ALTER TABLE "new_Level" RENAME TO "Level";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
