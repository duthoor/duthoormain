-- AlterTable
ALTER TABLE "banks" ADD COLUMN     "email" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "logo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "phone" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "short_description" TEXT NOT NULL DEFAULT '';
