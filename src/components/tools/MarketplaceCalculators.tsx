"use client";

import type React from "react";
import { useState } from "react";
import {
  formatMoney,
  formatPercent,
  marketplaceProfit,
  parseNumber,
} from "@/lib/calculators";
import {
  CalcLayout,
  EmptyResults,
  Headline,
  Note,
  NumberField,
  ResultRow,
} from "./ToolFields";

interface MarketplaceResultsProps {
  r: ReturnType<typeof marketplaceProfit>;
  note: string;
}

const MarketplaceResults: React.FC<MarketplaceResultsProps> = ({ r, note }) => (
  <>
    <Headline
      label="Profit per sale"
      value={formatMoney(r.profit)}
      note={`${formatPercent(r.margin)} profit margin`}
    />
    <div>
      <ResultRow
        label="Total received from buyer"
        value={formatMoney(r.revenue)}
      />
      <ResultRow label="Marketplace fees" value={formatMoney(r.fees)} />
      <ResultRow
        label="Your costs (item and shipping)"
        value={formatMoney(r.costs)}
      />
      <ResultRow
        label="Return on cost (ROI)"
        value={r.roi === null ? "n/a" : formatPercent(r.roi)}
      />
      <ResultRow
        label="Break-even item price"
        value={
          r.breakEvenPrice === null ? "n/a" : formatMoney(r.breakEvenPrice)
        }
      />
    </div>
    <Note>{note}</Note>
  </>
);

export const EbayCalculator: React.FC = () => {
  const [price, setPrice] = useState("");
  const [shipCharged, setShipCharged] = useState("");
  const [itemCost, setItemCost] = useState("");
  const [shipCost, setShipCost] = useState("");
  const [feePct, setFeePct] = useState("13.6");
  const [orderFee, setOrderFee] = useState("0.40");
  const [adsPct, setAdsPct] = useState("");

  const itemPrice = parseNumber(price);
  const r = marketplaceProfit({
    price: itemPrice,
    shippingCharged: parseNumber(shipCharged),
    itemCost: parseNumber(itemCost),
    shippingCost: parseNumber(shipCost),
    percentFees: [parseNumber(feePct), parseNumber(adsPct)],
    fixedFees: [parseNumber(orderFee)],
  });

  return (
    <CalcLayout
      inputs={
        <>
          <NumberField
            id="eb-price"
            label="Item sale price"
            prefix="$"
            value={price}
            onChange={setPrice}
          />
          <NumberField
            id="eb-ship-charged"
            label="Shipping charged to buyer"
            prefix="$"
            value={shipCharged}
            onChange={setShipCharged}
          />
          <NumberField
            id="eb-item-cost"
            label="What the item cost you"
            prefix="$"
            value={itemCost}
            onChange={setItemCost}
          />
          <NumberField
            id="eb-ship-cost"
            label="Shipping cost you pay"
            prefix="$"
            value={shipCost}
            onChange={setShipCost}
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            <NumberField
              id="eb-fee"
              label="Final value fee"
              suffix="%"
              value={feePct}
              onChange={setFeePct}
            />
            <NumberField
              id="eb-order-fee"
              label="Per-order fee"
              prefix="$"
              value={orderFee}
              onChange={setOrderFee}
            />
            <NumberField
              id="eb-ads"
              label="Ad rate"
              suffix="%"
              value={adsPct}
              onChange={setAdsPct}
              hint="Promoted listings, if used."
            />
          </div>
        </>
      }
      results={
        itemPrice > 0 ? (
          <MarketplaceResults
            r={r}
            note="Fee rates start at typical values for most categories. They vary by category and change over time, so check eBay's current fee schedule and edit them if needed. Fees are applied to the item price plus shipping charged."
          />
        ) : (
          <EmptyResults text="Enter your sale price to see your profit." />
        )
      }
    />
  );
};

export const EtsyCalculator: React.FC = () => {
  const [price, setPrice] = useState("");
  const [shipCharged, setShipCharged] = useState("");
  const [itemCost, setItemCost] = useState("");
  const [shipCost, setShipCost] = useState("");
  const [listingFee, setListingFee] = useState("0.20");
  const [transactionPct, setTransactionPct] = useState("6.5");
  const [processingPct, setProcessingPct] = useState("3");
  const [processingFixed, setProcessingFixed] = useState("0.25");
  const [adsPct, setAdsPct] = useState("");

  const itemPrice = parseNumber(price);
  const r = marketplaceProfit({
    price: itemPrice,
    shippingCharged: parseNumber(shipCharged),
    itemCost: parseNumber(itemCost),
    shippingCost: parseNumber(shipCost),
    percentFees: [
      parseNumber(transactionPct),
      parseNumber(processingPct),
      parseNumber(adsPct),
    ],
    fixedFees: [parseNumber(listingFee), parseNumber(processingFixed)],
  });

  return (
    <CalcLayout
      inputs={
        <>
          <NumberField
            id="et-price"
            label="Item sale price"
            prefix="$"
            value={price}
            onChange={setPrice}
          />
          <NumberField
            id="et-ship-charged"
            label="Shipping charged to buyer"
            prefix="$"
            value={shipCharged}
            onChange={setShipCharged}
          />
          <NumberField
            id="et-item-cost"
            label="Materials and labour for the item"
            prefix="$"
            value={itemCost}
            onChange={setItemCost}
          />
          <NumberField
            id="et-ship-cost"
            label="Shipping cost you pay"
            prefix="$"
            value={shipCost}
            onChange={setShipCost}
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <NumberField
              id="et-listing"
              label="Listing fee"
              prefix="$"
              value={listingFee}
              onChange={setListingFee}
            />
            <NumberField
              id="et-transaction"
              label="Transaction fee"
              suffix="%"
              value={transactionPct}
              onChange={setTransactionPct}
            />
            <NumberField
              id="et-processing"
              label="Payment processing"
              suffix="%"
              value={processingPct}
              onChange={setProcessingPct}
            />
            <NumberField
              id="et-processing-fixed"
              label="Processing, per order"
              prefix="$"
              value={processingFixed}
              onChange={setProcessingFixed}
            />
          </div>
          <NumberField
            id="et-ads"
            label="Advertising fee (optional)"
            suffix="%"
            value={adsPct}
            onChange={setAdsPct}
            hint="Only if the sale came through an Etsy ad."
          />
        </>
      }
      results={
        itemPrice > 0 ? (
          <MarketplaceResults
            r={r}
            note="Fee rates start at typical US values. They vary by country and change over time, so check Etsy's current fee schedule and edit them if needed. Percentage fees are applied to the item price plus shipping charged."
          />
        ) : (
          <EmptyResults text="Enter your sale price to see your profit." />
        )
      }
    />
  );
};
