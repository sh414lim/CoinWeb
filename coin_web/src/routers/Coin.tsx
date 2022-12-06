import React from "react";
import { useParams } from "react-router";

interface CoinParams {
  coinId: string;
}

function Coin() {
  const { coinId } = useParams<CoinParams>();
  return <div>{coinId}</div>;
}

export default Coin;
