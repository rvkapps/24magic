"use client";

import type React from "react";
import { useState } from "react";
import {
  costOfGoodsSold,
  debtToEquity,
  ebitda,
  formatMoney,
  formatPercent,
  parseNumber,
  profitMargin,
} from "@/lib/calculators";
import {
  CalcLayout,
  EmptyResults,
  Headline,
  Note,
  NumberField,
  ResultRow,
} from "./ToolFields";

export const ProfitMarginCalculator: React.FC = () => {
  const [revenue, setRevenue] = useState("");
  const [cogs, setCogs] = useState("");
  const [expenses, setExpenses] = useState("");

  const rev = parseNumber(revenue);
  const r = profitMargin({
    revenue: rev,
    cogs: parseNumber(cogs),
    operatingExpenses: parseNumber(expenses),
  });

  return (
    <CalcLayout
      inputs={
        <>
          <NumberField
            id="pm-revenue"
            label="Revenue"
            prefix="$"
            value={revenue}
            onChange={setRevenue}
            hint="Total sales for the period."
          />
          <NumberField
            id="pm-cogs"
            label="Cost of goods sold"
            prefix="$"
            value={cogs}
            onChange={setCogs}
            hint="Direct costs of the products or services you sold."
          />
          <NumberField
            id="pm-expenses"
            label="Operating expenses"
            prefix="$"
            value={expenses}
            onChange={setExpenses}
            hint="Rent, wages, software, marketing and other running costs."
          />
        </>
      }
      results={
        rev > 0 ? (
          <>
            <Headline
              label="Net profit margin"
              value={formatPercent(r.netMargin)}
              note={`Net profit of ${formatMoney(r.netProfit, 0)}`}
            />
            <div>
              <ResultRow
                label="Gross profit"
                value={formatMoney(r.grossProfit, 0)}
              />
              <ResultRow
                label="Gross margin"
                value={formatPercent(r.grossMargin)}
              />
              <ResultRow
                label="Net profit"
                value={formatMoney(r.netProfit, 0)}
              />
              <ResultRow
                label="Net margin"
                value={formatPercent(r.netMargin)}
              />
              <ResultRow
                label="Markup on cost of goods"
                value={r.markup === null ? "n/a" : formatPercent(r.markup)}
              />
            </div>
            <Note>
              Net profit here is revenue minus cost of goods sold and operating
              expenses, before interest and tax.
            </Note>
          </>
        ) : (
          <EmptyResults text="Enter your revenue to see your margins." />
        )
      }
    />
  );
};

export const CogsCalculator: React.FC = () => {
  const [beginning, setBeginning] = useState("");
  const [purchases, setPurchases] = useState("");
  const [other, setOther] = useState("");
  const [ending, setEnding] = useState("");
  const [revenue, setRevenue] = useState("");

  const hasInput = [beginning, purchases, other, ending].some(
    (v) => parseNumber(v) !== 0,
  );
  const r = costOfGoodsSold({
    beginningInventory: parseNumber(beginning),
    purchases: parseNumber(purchases),
    otherDirectCosts: parseNumber(other),
    endingInventory: parseNumber(ending),
    revenue: parseNumber(revenue),
  });

  return (
    <CalcLayout
      inputs={
        <>
          <NumberField
            id="cogs-begin"
            label="Beginning inventory"
            prefix="$"
            value={beginning}
            onChange={setBeginning}
            hint="Value of inventory at the start of the period."
          />
          <NumberField
            id="cogs-purchases"
            label="Purchases during the period"
            prefix="$"
            value={purchases}
            onChange={setPurchases}
          />
          <NumberField
            id="cogs-other"
            label="Other direct costs (optional)"
            prefix="$"
            value={other}
            onChange={setOther}
            hint="For example freight-in or direct labour."
          />
          <NumberField
            id="cogs-end"
            label="Ending inventory"
            prefix="$"
            value={ending}
            onChange={setEnding}
            hint="Value of inventory at the end of the period."
          />
          <NumberField
            id="cogs-revenue"
            label="Revenue (optional)"
            prefix="$"
            value={revenue}
            onChange={setRevenue}
            hint="Add this to see your gross profit and margin."
          />
        </>
      }
      results={
        hasInput ? (
          <>
            <Headline
              label="Cost of goods sold"
              value={formatMoney(r.cogs, 0)}
            />
            <div>
              <ResultRow
                label="Average inventory"
                value={formatMoney(r.averageInventory, 0)}
              />
              <ResultRow
                label="Inventory turnover"
                value={
                  r.turnover === null ? "n/a" : `${r.turnover.toFixed(2)}x`
                }
              />
              <ResultRow
                label="Average days to sell inventory"
                value={
                  r.daysToSell === null ? "n/a" : `${Math.round(r.daysToSell)}`
                }
              />
              {r.grossProfit !== null && r.grossMargin !== null && (
                <>
                  <ResultRow
                    label="Gross profit"
                    value={formatMoney(r.grossProfit, 0)}
                  />
                  <ResultRow
                    label="Gross margin"
                    value={formatPercent(r.grossMargin)}
                  />
                </>
              )}
            </div>
            <Note>
              Cost of goods sold = beginning inventory + purchases + other
              direct costs - ending inventory.
            </Note>
          </>
        ) : (
          <EmptyResults />
        )
      }
    />
  );
};

export const DebtToEquityCalculator: React.FC = () => {
  const [liabilities, setLiabilities] = useState("");
  const [equity, setEquity] = useState("");

  const hasInput = parseNumber(liabilities) !== 0 || parseNumber(equity) !== 0;
  const r = debtToEquity({
    liabilities: parseNumber(liabilities),
    equity: parseNumber(equity),
  });

  const reading =
    r.ratio === null
      ? null
      : r.ratio < 1
        ? "Lower leverage: more of the business is funded by owners than by debt."
        : r.ratio <= 2
          ? "Moderate leverage. What is healthy depends heavily on your industry."
          : "Higher leverage: the business relies heavily on debt. Worth reviewing.";

  return (
    <CalcLayout
      inputs={
        <>
          <NumberField
            id="de-liabilities"
            label="Total liabilities"
            prefix="$"
            value={liabilities}
            onChange={setLiabilities}
            hint="Everything the business owes, from your balance sheet."
          />
          <NumberField
            id="de-equity"
            label="Total shareholders' equity"
            prefix="$"
            value={equity}
            onChange={setEquity}
            hint="Assets minus liabilities, from your balance sheet."
          />
        </>
      }
      results={
        hasInput ? (
          r.ratio !== null ? (
            <>
              <Headline
                label="Debt to equity ratio"
                value={r.ratio.toFixed(2)}
                note={reading ?? undefined}
              />
              <div>
                <ResultRow
                  label="Debt as a share of total funding"
                  value={
                    r.debtRatio === null
                      ? "n/a"
                      : formatPercent(r.debtRatio * 100)
                  }
                />
              </div>
              <Note>
                Ratios vary by industry, so compare with similar businesses. The
                bands above are general rules of thumb, not advice.
              </Note>
            </>
          ) : (
            <EmptyResults text="Equity must be above zero to calculate this ratio. Zero or negative equity means liabilities are at least as large as assets." />
          )
        ) : (
          <EmptyResults />
        )
      }
    />
  );
};

export const EbitdaCalculator: React.FC = () => {
  const [netIncome, setNetIncome] = useState("");
  const [interest, setInterest] = useState("");
  const [taxes, setTaxes] = useState("");
  const [depreciation, setDepreciation] = useState("");
  const [amortization, setAmortization] = useState("");
  const [revenue, setRevenue] = useState("");

  const hasInput = [
    netIncome,
    interest,
    taxes,
    depreciation,
    amortization,
  ].some((v) => parseNumber(v) !== 0);
  const r = ebitda({
    netIncome: parseNumber(netIncome),
    interest: parseNumber(interest),
    taxes: parseNumber(taxes),
    depreciation: parseNumber(depreciation),
    amortization: parseNumber(amortization),
    revenue: parseNumber(revenue),
  });

  return (
    <CalcLayout
      inputs={
        <>
          <NumberField
            id="eb-net"
            label="Net income"
            prefix="$"
            value={netIncome}
            onChange={setNetIncome}
          />
          <NumberField
            id="eb-interest"
            label="Interest expense"
            prefix="$"
            value={interest}
            onChange={setInterest}
          />
          <NumberField
            id="eb-taxes"
            label="Income taxes"
            prefix="$"
            value={taxes}
            onChange={setTaxes}
          />
          <NumberField
            id="eb-dep"
            label="Depreciation"
            prefix="$"
            value={depreciation}
            onChange={setDepreciation}
          />
          <NumberField
            id="eb-amort"
            label="Amortization"
            prefix="$"
            value={amortization}
            onChange={setAmortization}
          />
          <NumberField
            id="eb-rev"
            label="Revenue (optional)"
            prefix="$"
            value={revenue}
            onChange={setRevenue}
            hint="Add this to see your EBITDA margin."
          />
        </>
      }
      results={
        hasInput ? (
          <>
            <Headline label="EBITDA" value={formatMoney(r.value, 0)} />
            <div>
              <ResultRow
                label="EBITDA margin"
                value={
                  r.margin === null ? "Add revenue" : formatPercent(r.margin)
                }
              />
            </div>
            <Note>
              EBITDA = net income + interest + taxes + depreciation +
              amortization. It is a measure of operating performance, not cash
              flow.
            </Note>
          </>
        ) : (
          <EmptyResults />
        )
      }
    />
  );
};
