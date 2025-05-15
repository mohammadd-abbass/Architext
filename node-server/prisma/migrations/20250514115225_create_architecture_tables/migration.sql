-- CreateTable
CREATE TABLE "architecture_sessions" (
    "id" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'in_progress',
    "result" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "architecture_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "architecture_messages" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "architecture_messages_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "architecture_sessions" ADD CONSTRAINT "architecture_sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "architecture_messages" ADD CONSTRAINT "architecture_messages_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "architecture_sessions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
