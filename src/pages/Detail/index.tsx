import React from 'react'
import { DetailCard } from '../../components/DetailCard'

const MOCK_INGREDIENTS = [
  '20-Pound turkey',
  '1 Onion',
  '1 Lemon',
  '1 Apple',
  '.75 ounce container fresh rosemary ',
  '.75 ounce container fresh thyme ',
  '.75 ounce container fresh sage ',
]

const MOCK_INSTRUCTIONS = ['Buy turkey', 'Mix ingredients', 'Make sure it is perfect!']

export const Detail = () => {
  return (
    <div id="background-gradient">
      <h1>Detail page</h1>
      <DetailCard
        title="Thanksgiving Turkey"
        ingredients={MOCK_INGREDIENTS}
        instructions={MOCK_INSTRUCTIONS}
      />
    </div>
  )
}
