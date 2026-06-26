import React from "react";
import { useFormContext } from "react-hook-form";

const inputClass =
  "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none";

const labelClass =
  "block text-sm font-medium text-gray-700 mb-2";

export default function SectionD() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 space-y-8">
      {/* Header */}
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          Section D: Open-Ended Questions
        </h2>

        <p className="text-gray-500 mt-1">
          Please share your views and experiences regarding onion
          retailing in Nakasero Market.
        </p>
      </div>

      {/* Question 36 */}
      <div>
        <label className={labelClass}>
          36. What major challenges do you face in onion retailing
          in Nakasero Market?
        </label>

        <textarea
          rows="5"
          className={inputClass}
          placeholder="Describe the major challenges you face..."
          {...register("major_challenges")}
        />

        {errors.major_challenges && (
          <p className="text-red-500 text-sm mt-1">
            {errors.major_challenges.message}
          </p>
        )}
      </div>

      {/* Question 37 */}
      <div>
        <label className={labelClass}>
          37. What measures do you think could reduce onion
          spoilage and improve profitability among retailers?
        </label>

        <textarea
          rows="5"
          className={inputClass}
          placeholder="Suggest measures that could improve profitability and reduce spoilage..."
          {...register("measures_to_reduce")}
        />

        {errors.measures_to_reduce && (
          <p className="text-red-500 text-sm mt-1">
            {errors.measures_to_reduce.message}
          </p>
        )}
      </div>

      {/* Question 38 */}
      <div>
        <label className={labelClass}>
          38. Any other comments or recommendations?
        </label>

        <textarea
          rows="5"
          className={inputClass}
          placeholder="Any additional comments, suggestions, or recommendations..."
          {...register("other_comments")}
        />

        {errors.other_comments && (
          <p className="text-red-500 text-sm mt-1">
            {errors.other_comments.message}
          </p>
        )}
      </div>

      {/* Completion Message */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <p className="text-green-700 font-medium">
          ✓ You have reached the final section of the survey.
        </p>
        <p className="text-green-600 text-sm mt-1">
          Review your responses before submitting.
        </p>
      </div>
    </div>
  );
}