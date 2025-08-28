-- CreateTable
CREATE TABLE "public"."Message" (
    "id" TEXT NOT NULL,
    "To" TEXT NOT NULL,
    "Subject" TEXT NOT NULL,
    "Writemessage" TEXT NOT NULL,
    "FutureDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Status" TEXT NOT NULL DEFAULT 'Pending',
    "userID" TEXT NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Message" ADD CONSTRAINT "Message_userID_fkey" FOREIGN KEY ("userID") REFERENCES "public"."User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
