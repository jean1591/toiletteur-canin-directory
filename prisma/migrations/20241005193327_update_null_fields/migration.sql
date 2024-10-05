-- AlterTable
ALTER TABLE "Place" ALTER COLUMN "businessStatus" DROP NOT NULL,
ALTER COLUMN "googleMapsUri" DROP NOT NULL,
ALTER COLUMN "internationalPhoneNumber" DROP NOT NULL,
ALTER COLUMN "rating" DROP NOT NULL,
ALTER COLUMN "userRatingCount" DROP NOT NULL,
ALTER COLUMN "websiteUri" DROP NOT NULL,
ALTER COLUMN "googleId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Review" ALTER COLUMN "authorPhotoUri" DROP NOT NULL,
ALTER COLUMN "rating" DROP NOT NULL,
ALTER COLUMN "text" DROP NOT NULL;
