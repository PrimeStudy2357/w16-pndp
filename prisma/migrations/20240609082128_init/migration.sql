-- CreateTable
CREATE TABLE "Pint" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "rule" TEXT NOT NULL,
    "url" TEXT,
    "createdAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Pint_name_key" ON "Pint"("name");
