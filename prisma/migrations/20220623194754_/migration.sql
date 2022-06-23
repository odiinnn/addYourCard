-- CreateTable
CREATE TABLE "CardData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cardNumber" INTEGER NOT NULL,
    "expirationDate" TEXT,
    "CVV" INTEGER,
    "amount" INTEGER
);
