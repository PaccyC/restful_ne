-- AlterTable
ALTER TABLE "car_movements" ALTER COLUMN "exit_date_time" SET DEFAULT NULL;

-- CreateTable
CREATE TABLE "tickets" (
    "id" SERIAL NOT NULL,
    "plateNumber" TEXT NOT NULL,
    "parkingCode" TEXT NOT NULL,
    "entry_date_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tickets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bills" (
    "id" SERIAL NOT NULL,
    "plateNumber" TEXT NOT NULL,
    "parkingCode" TEXT NOT NULL,
    "entry_date_time" TIMESTAMP(3) NOT NULL,
    "exit_date_time" TIMESTAMP(3),
    "charged_amount" INTEGER NOT NULL,

    CONSTRAINT "bills_pkey" PRIMARY KEY ("id")
);
