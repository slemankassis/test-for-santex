import React from 'react';

export interface SubtotalContextType {
  total: number;
  subtotalWithTaxes: number;
  addSale(saleSubtotal: number, saleSubtotalWithTaxes: number): void;
}

const SubtotalContext = React.createContext<SubtotalContextType>({
  total: 0,
  subtotalWithTaxes: 0,
  addSale(saleSubtotal, saleSubtotalWithTaxes) {}
});

export default SubtotalContext;
