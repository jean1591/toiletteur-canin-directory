import { Review } from '@/types/places'

export const DisplayReviews = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className="rounded-xl border-[1px] border-stone-300 bg-white p-8 shadow-lg">
      <p className="text-2xl font-extrabold leading-none tracking-tight">
        Commentaires
      </p>

      <div className="mt-4 space-y-4">
        {reviews.map((review) => (
          <div
            key={`${review.publishedAt}`}
            className="rounded-md border-[1px] border-stone-300 bg-stone-100 p-4"
          >
            <div className="flex w-full items-center justify-between font-semibold">
              <p className="capitalize">{review.authorName}</p>
              <p>{review.rating} ⭐️</p>
            </div>

            {review.text && (
              <p className="mt-2 text-sm text-slate-600">{review.text}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
