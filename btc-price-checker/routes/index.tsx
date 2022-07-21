/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

const url: string = "https://api.coindesk.com/v1/bpi/currentprice.json";

export interface Price {
  time: Time
  disclaimer: string
  chartName: string
  bpi: Bpi
}

export interface Time {
  updated: string
  updatedISO: string
  updateduk: string
}

export interface Bpi {
  USD: Usd
  GBP: Gbp
  EUR: Eur
}

export interface Usd {
  code: string
  symbol: string
  rate: string
  description: string
  rate_float: number
}

export interface Gbp {
  code: string
  symbol: string
  rate: string
  description: string
  rate_float: number
}

export interface Eur {
  code: string
  symbol: string
  rate: string
  description: string
  rate_float: number
}


export default function Home() {
  return (
    <div class={tw`w-screen h-screen bg-gray-900`}>
      <div class={tw`p-8 mx-auto max-w-screen-md`}>
        <img
          src="/btc.png"
          width="200px"
          class="mx-auto"
          alt=""
        />
        <p class={tw`my-10 text(center 3xl white)`}>
          Bitcoin Price Checker
        </p>
      </div>
    </div>
  );
}
