/*
  Warnings:

  - Added the required column `requestId` to the `CardData` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CardData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cardNumber" INTEGER NOT NULL,
    "expirationDate" TEXT,
    "CVV" INTEGER,
    "amount" INTEGER,
    "requestId" TEXT NOT NULL
);
INSERT INTO "new_CardData" ("CVV", "amount", "cardNumber", "expirationDate", "id") SELECT "CVV", "amount", "cardNumber", "expirationDate", "id" FROM "CardData";
DROP TABLE "CardData";
ALTER TABLE "new_CardData" RENAME TO "CardData";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
