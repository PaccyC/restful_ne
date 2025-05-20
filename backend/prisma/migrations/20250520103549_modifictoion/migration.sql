/*
  Warnings:

  - You are about to alter the column `charged_amount` on the `car_movements` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "car_movements" ALTER COLUMN "exit_date_time" SET DEFAULT NULL,
ALTER COLUMN "charged_amount" SET DATA TYPE INTEGER;
