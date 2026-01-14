"use client";

import { useState, useEffect, useCallback } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface RateDataPoint {
  date: string;
  rate: number;
  fullDate: string;
}

const CACHE_KEY = "jaldipay_exchange_rate_history_v2";
const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

interface CachedData {
  timestamp: number;
  data: RateDataPoint[];
}

function getCachedData(): CachedData | null {
  if (typeof window === "undefined") return null;

  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;

    const parsed: CachedData = JSON.parse(cached);
    const now = Date.now();

    // Check if cache is still valid (less than 7 days old)
    if (now - parsed.timestamp < CACHE_DURATION) {
      return parsed;
    }
  } catch {
    // Invalid cache, return null
  }

  return null;
}

function setCachedData(data: RateDataPoint[]): void {
  if (typeof window === "undefined") return;

  const cacheData: CachedData = {
    timestamp: Date.now(),
    data,
  };

  localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
}

// Format date for API: YYYY-MM-DD
function formatDateForAPI(date: Date): string {
  return date.toISOString().split("T")[0];
}

// Format date for display: Jan 14
function formatDateForDisplay(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export default function ExchangeRateChart() {
  const [chartData, setChartData] = useState<RateDataPoint[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHistoricalData = useCallback(async () => {
    // Check cache first
    const cached = getCachedData();
    if (cached) {
      setChartData(cached.data);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const today = new Date();
      const historicalData: RateDataPoint[] = [];

      // Fetch last 7 days of data using Fawaz Ahmed's Currency API
      const fetchPromises: Promise<{ date: Date; rate: number | null }>[] = [];

      for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dateStr = formatDateForAPI(date);

        fetchPromises.push(
          fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${dateStr}/v1/currencies/usd.json`)
            .then(async (res) => {
              if (!res.ok) throw new Error("Failed to fetch");
              const data = await res.json();
              return { date, rate: data.usd?.bdt || null };
            })
            .catch(() => {
              // Fallback to alternative endpoint
              return fetch(`https://latest.currency-api.pages.dev/v1/currencies/usd.json`)
                .then(async (res) => {
                  if (!res.ok) throw new Error("Failed to fetch");
                  const data = await res.json();
                  return { date, rate: data.usd?.bdt || null };
                })
                .catch(() => ({ date, rate: null }));
            })
        );
      }

      const results = await Promise.all(fetchPromises);

      // Process results
      for (const result of results) {
        if (result.rate !== null) {
          historicalData.push({
            date: formatDateForDisplay(result.date),
            rate: Math.round(result.rate * 1000) / 1000,
            fullDate: formatDateForAPI(result.date),
          });
        }
      }

      if (historicalData.length > 0) {
        setChartData(historicalData);
        setCachedData(historicalData);
      } else {
        setError("Unable to fetch exchange rate data");
      }
    } catch (err) {
      console.error("Failed to fetch historical data:", err);
      setError("Unable to fetch exchange rate data");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchHistoricalData();
  }, [fetchHistoricalData]);

  if (isLoading) {
    return (
      <div className="h-[160px] flex items-center justify-center bg-gray-50 rounded-lg">
        <div className="text-center">
          <div className="animate-spin h-6 w-6 border-2 border-[#9EE86F] border-t-transparent rounded-full mx-auto mb-2"></div>
          <p className="text-xs text-gray-500">Loading chart...</p>
        </div>
      </div>
    );
  }

  if (error || chartData.length === 0) {
    return (
      <div className="h-[160px] flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-200">
        <p className="text-xs text-gray-500">{error || "Unable to load chart"}</p>
      </div>
    );
  }

  // Calculate min and max for better Y-axis display
  const rates = chartData.map((d) => d.rate);
  const minRate = Math.min(...rates);
  const maxRate = Math.max(...rates);
  const padding = (maxRate - minRate) * 0.3 || 0.5;

  return (
    <div>
      {/* Chart */}
      <div className="h-[160px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 5, right: 5, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="rateGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#9EE86F" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#9EE86F" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 10, fill: "#6b7280" }}
              tickLine={false}
              axisLine={{ stroke: "#e5e7eb" }}
            />
            <YAxis
              domain={[minRate - padding, maxRate + padding]}
              tick={{ fontSize: 10, fill: "#6b7280" }}
              tickLine={false}
              axisLine={{ stroke: "#e5e7eb" }}
              tickFormatter={(value) => value.toFixed(1)}
              width={40}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                fontSize: "12px",
              }}
              formatter={(value) => [`${(value as number).toFixed(3)} BDT`, "Rate"]}
              labelFormatter={(label) => label}
            />
            <Area
              type="monotone"
              dataKey="rate"
              stroke="#0A3700"
              strokeWidth={2}
              fill="url(#rateGradient)"
              dot={{ fill: "#0A3700", strokeWidth: 0, r: 2 }}
              activeDot={{ r: 4, fill: "#9EE86F", stroke: "#0A3700", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Footer note */}
      <div className="mt-2 text-center text-xs text-gray-400">
        7-day historical rates
      </div>
    </div>
  );
}
