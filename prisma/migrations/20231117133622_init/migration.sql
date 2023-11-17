/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Post";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Leilao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "produto" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "datalimite" DATETIME NOT NULL,
    "id_dono" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Leilao_id_dono_fkey" FOREIGN KEY ("id_dono") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Lance" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_leilao" TEXT NOT NULL,
    "id_usuario" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Lance_id_leilao_fkey" FOREIGN KEY ("id_leilao") REFERENCES "Leilao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Lance_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Leilao_id_dono_key" ON "Leilao"("id_dono");

-- CreateIndex
CREATE UNIQUE INDEX "Lance_id_leilao_key" ON "Lance"("id_leilao");

-- CreateIndex
CREATE UNIQUE INDEX "Lance_id_usuario_key" ON "Lance"("id_usuario");
