-- CreateEnum
CREATE TYPE "ApiType" AS ENUM ('COMMENT', 'COMPLEXITY', 'ANALYZE');

-- CreateTable
CREATE TABLE "playground_records" (
    "id" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "type" "ApiType" NOT NULL,
    "code" TEXT NOT NULL,
    "result" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "playground_records_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "playground_records_userId_idx" ON "playground_records"("userId");

-- CreateIndex
CREATE INDEX "playground_records_type_idx" ON "playground_records"("type");

-- AddForeignKey
ALTER TABLE "playground_records" ADD CONSTRAINT "playground_records_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
