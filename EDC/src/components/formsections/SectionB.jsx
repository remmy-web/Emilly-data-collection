import React from "react";
import { useFormContext } from "react-hook-form";

const inputClass =
  "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none";

const labelClass =
  "block text-sm font-medium text-gray-700 mb-1";

const errorClass =
  "text-red-500 text-sm mt-1";

export default function SectionB() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 space-y-8">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          Section B: Costs and Returns in Onion Retailing
        </h2>
        <p className="text-gray-500">
          Provide information about weekly purchases, sales and costs.
        </p>
      </div>

      {/* Purchase & Sales Information */}
      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className={labelClass}>
            Weekly Purchase Quantity (kg) *
          </label>
          <input
            type="number"
            className={inputClass}
            {...register("weekly_purchase_kg", {
              valueAsNumber: true,
            })}
          />
          {errors.weekly_purchase_kg && (
            <p className={errorClass}>
              {errors.weekly_purchase_kg.message}
            </p>
          )}
        </div>

        <div>
          <label className={labelClass}>
            Average Purchase Price (UGX/kg) *
          </label>
          <input
            type="number"
            className={inputClass}
            {...register("avg_purchase_price", {
              valueAsNumber: true,
            })}
          />
          {errors.avg_purchase_price && (
            <p className={errorClass}>
              {errors.avg_purchase_price.message}
            </p>
          )}
        </div>

        <div>
          <label className={labelClass}>
            Average Selling Price (UGX/kg)
          </label>
          <input
            type="number"
            className={inputClass}
            {...register("avg_selling_price", {
              valueAsNumber: true,
            })}
          />
        </div>

        <div>
          <label className={labelClass}>
            Weekly Sales Volume (kg)
          </label>
          <input
            type="number"
            className={inputClass}
            {...register("weekly_sales_kg", {
              valueAsNumber: true,
            })}
          />
        </div>

        <div>
          <label className={labelClass}>
            Weekly Revenue (UGX)
          </label>
          <input
            type="number"
            className={inputClass}
            {...register("weekly_revenue", {
              valueAsNumber: true,
            })}
          />
        </div>

        <div>
          <label className={labelClass}>
            Weekly Transport Cost (UGX)
          </label>
          <input
            type="number"
            className={inputClass}
            {...register("weekly_transport_cost", {
              valueAsNumber: true,
            })}
          />
        </div>
      </div>

      {/* Cost Table */}
      <div>
        <h3 className="text-lg font-semibold mb-4">
          Average Weekly Costs Incurred
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">
                  Cost Item
                </th>
                <th className="border p-3 text-left">
                  Weekly Cost (UGX)
                </th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="border p-3">Stall Rent</td>
                <td className="border p-3">
                  <input
                    type="number"
                    className={inputClass}
                    {...register("stall_rent", {
                      valueAsNumber: true,
                    })}
                  />
                </td>
              </tr>

              <tr>
                <td className="border p-3">Market Dues</td>
                <td className="border p-3">
                  <input
                    type="number"
                    className={inputClass}
                    {...register("market_dues", {
                      valueAsNumber: true,
                    })}
                  />
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  Packaging Materials
                </td>
                <td className="border p-3">
                  <input
                    type="number"
                    className={inputClass}
                    {...register("packaging_materials", {
                      valueAsNumber: true,
                    })}
                  />
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  Loading & Offloading
                </td>
                <td className="border p-3">
                  <input
                    type="number"
                    className={inputClass}
                    {...register("loading_offloading", {
                      valueAsNumber: true,
                    })}
                  />
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  Casual Labour
                </td>
                <td className="border p-3">
                  <input
                    type="number"
                    className={inputClass}
                    {...register("casual_labour", {
                      valueAsNumber: true,
                    })}
                  />
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  Storage Expenses
                </td>
                <td className="border p-3">
                  <input
                    type="number"
                    className={inputClass}
                    {...register("storage_expenses", {
                      valueAsNumber: true,
                    })}
                  />
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  Other Cost Description
                </td>
                <td className="border p-3">
                  <input
                    type="text"
                    className={inputClass}
                    {...register("other_cost_description")}
                    placeholder="Specify"
                  />
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  Other Cost Amount
                </td>
                <td className="border p-3">
                  <input
                    type="number"
                    className={inputClass}
                    {...register("other_cost_amount", {
                      valueAsNumber: true,
                    })}
                  />
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

      {/* Profitability */}
      <div>
        <label className={labelClass}>
          In your opinion, how profitable is onion retailing?
        </label>

        <select
          {...register("profitability_opinion")}
          className={inputClass}
        >
          <option value="">Select</option>
          <option value="Very profitable">
            Very profitable
          </option>
          <option value="Moderately profitable">
            Moderately profitable
          </option>
          <option value="Slightly profitable">
            Slightly profitable
          </option>
          <option value="Not profitable">
            Not profitable
          </option>
        </select>
      </div>
    </div>
  );
}