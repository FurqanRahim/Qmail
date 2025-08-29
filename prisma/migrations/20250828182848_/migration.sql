-- DropForeignKey
ALTER TABLE "public"."Message" DROP CONSTRAINT "Message_userID_fkey";

-- AddForeignKey
ALTER TABLE "public"."Message" ADD CONSTRAINT "Message_userID_fkey" FOREIGN KEY ("userID") REFERENCES "public"."User"("Id") ON DELETE CASCADE ON UPDATE CASCADE;
