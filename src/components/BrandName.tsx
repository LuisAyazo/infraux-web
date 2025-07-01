import React from 'react';

interface BrandNameProps {
  className?: string;
  infraClassName?: string;
  uxClassName?: string;
}

export const BrandName: React.FC<BrandNameProps> = ({
  className = "",
  infraClassName = "font-bold text-[#374151]",
  uxClassName = "font-bold text-emerald-500"
}) => (
  <span className={className}>
    <span className={infraClassName}>Infra</span>
    <span className={uxClassName}>UX</span>
  </span>
);

export default BrandName;
