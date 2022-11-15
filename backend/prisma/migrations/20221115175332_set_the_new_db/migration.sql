/*
  Warnings:

  - You are about to drop the column `accountId` on the `Transactions` table. All the data in the column will be lost.
  - Changed the type of `value` on the `Transactions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Transactions" DROP COLUMN "accountId",
DROP COLUMN "value",
ADD COLUMN     "value" INTEGER NOT NULL;
