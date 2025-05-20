-- AlterTable
ALTER TABLE "car_movements" ALTER COLUMN "exit_date_time" DROP NOT NULL,
ALTER COLUMN "exit_date_time" SET DEFAULT NULL;
