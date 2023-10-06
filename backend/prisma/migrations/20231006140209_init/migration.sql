-- CreateEnum
CREATE TYPE "enum_collect_type" AS ENUM ('domiciliares', 'limpeza_urbana', 'solidos_urbanos', 'saneamento_basico', 'industriais', 'servicos_saude', 'construcao_civil', 'agrossilvopastoris', 'servicos_transportes', 'mineracao');

-- CreateTable
CREATE TABLE "clients" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "collects" (
    "id" SERIAL NOT NULL,
    "type" "enum_collect_type" NOT NULL,
    "mass" DOUBLE PRECISION NOT NULL,
    "volume" DOUBLE PRECISION NOT NULL,
    "clientId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "collects_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "collects" ADD CONSTRAINT "collects_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
