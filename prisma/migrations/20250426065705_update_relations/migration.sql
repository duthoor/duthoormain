/*
  Warnings:

  - You are about to drop the `_BankUsers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_BankUsers" DROP CONSTRAINT "_BankUsers_A_fkey";

-- DropForeignKey
ALTER TABLE "_BankUsers" DROP CONSTRAINT "_BankUsers_B_fkey";

-- DropForeignKey
ALTER TABLE "checkings_accounts" DROP CONSTRAINT "checkings_accounts_user_bank_id_fkey";

-- DropForeignKey
ALTER TABLE "investment_accounts" DROP CONSTRAINT "investment_accounts_user_bank_id_fkey";

-- DropForeignKey
ALTER TABLE "savings_accounts" DROP CONSTRAINT "savings_accounts_user_bank_id_fkey";

-- DropForeignKey
ALTER TABLE "transactions" DROP CONSTRAINT "transactions_checkingsAccountId_fkey";

-- DropForeignKey
ALTER TABLE "user_banks" DROP CONSTRAINT "user_banks_bankId_fkey";

-- DropForeignKey
ALTER TABLE "user_banks" DROP CONSTRAINT "user_banks_userId_fkey";

-- DropTable
DROP TABLE "_BankUsers";

-- AddForeignKey
ALTER TABLE "user_banks" ADD CONSTRAINT "user_banks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_banks" ADD CONSTRAINT "user_banks_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "banks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investment_accounts" ADD CONSTRAINT "investment_accounts_user_bank_id_fkey" FOREIGN KEY ("user_bank_id") REFERENCES "user_banks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "savings_accounts" ADD CONSTRAINT "savings_accounts_user_bank_id_fkey" FOREIGN KEY ("user_bank_id") REFERENCES "user_banks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "checkings_accounts" ADD CONSTRAINT "checkings_accounts_user_bank_id_fkey" FOREIGN KEY ("user_bank_id") REFERENCES "user_banks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_checkingsAccountId_fkey" FOREIGN KEY ("checkingsAccountId") REFERENCES "checkings_accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
