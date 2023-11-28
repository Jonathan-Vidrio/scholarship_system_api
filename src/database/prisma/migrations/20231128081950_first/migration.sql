-- CreateTable
CREATE TABLE "role" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "statusId" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "roleId" INTEGER NOT NULL DEFAULT 3,
    "statusId" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tutor" (
    "id" SERIAL NOT NULL,
    "workerId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "firstLastName" TEXT NOT NULL,
    "secondLastName" TEXT,
    "curp" TEXT NOT NULL,
    "statusId" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tutor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "educationLevel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "statusId" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "educationLevel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scholarship" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "amount" DOUBLE PRECISION NOT NULL,
    "statusId" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "scholarship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scholar" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "tutorId" INTEGER NOT NULL,
    "name" TEXT,
    "firstLastName" TEXT,
    "secondLastName" TEXT,
    "curp" TEXT NOT NULL,
    "birthdate" TIMESTAMP(3),
    "educationLevelId" INTEGER,
    "scholarshipId" INTEGER,
    "statusId" INTEGER NOT NULL DEFAULT 2,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "scholar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "document" (
    "id" SERIAL NOT NULL,
    "scholarId" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,
    "saved" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "url" TEXT NOT NULL,
    "statusId" INTEGER NOT NULL DEFAULT 2,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "documentType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "statusId" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "documentType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statusType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "statusType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "role_name_key" ON "role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "tutor_workerId_key" ON "tutor"("workerId");

-- CreateIndex
CREATE UNIQUE INDEX "educationLevel_name_key" ON "educationLevel"("name");

-- CreateIndex
CREATE UNIQUE INDEX "scholarship_name_key" ON "scholarship"("name");

-- CreateIndex
CREATE UNIQUE INDEX "scholar_userId_key" ON "scholar"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "scholar_tutorId_key" ON "scholar"("tutorId");

-- CreateIndex
CREATE UNIQUE INDEX "documentType_name_key" ON "documentType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "statusType_name_key" ON "statusType"("name");

-- AddForeignKey
ALTER TABLE "role" ADD CONSTRAINT "role_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "statusType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "statusType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tutor" ADD CONSTRAINT "tutor_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "statusType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "educationLevel" ADD CONSTRAINT "educationLevel_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "statusType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scholarship" ADD CONSTRAINT "scholarship_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "statusType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scholar" ADD CONSTRAINT "scholar_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scholar" ADD CONSTRAINT "scholar_tutorId_fkey" FOREIGN KEY ("tutorId") REFERENCES "tutor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scholar" ADD CONSTRAINT "scholar_educationLevelId_fkey" FOREIGN KEY ("educationLevelId") REFERENCES "educationLevel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scholar" ADD CONSTRAINT "scholar_scholarshipId_fkey" FOREIGN KEY ("scholarshipId") REFERENCES "scholarship"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scholar" ADD CONSTRAINT "scholar_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "statusType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document" ADD CONSTRAINT "document_scholarId_fkey" FOREIGN KEY ("scholarId") REFERENCES "scholar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document" ADD CONSTRAINT "document_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "documentType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document" ADD CONSTRAINT "document_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "statusType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documentType" ADD CONSTRAINT "documentType_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "statusType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
