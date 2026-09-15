import {
  Boxes,
  Building2,
  Factory,
  Forklift,
  PackageCheck,
  Printer,
  Shirt,
  Sprout,
  Truck,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

export const BUYER_SURVEY = 'https://forms.gle/2RJ6NG74XtLaBXy28';
export const SUPPLIER_SURVEY = 'https://forms.gle/qpTtyupgmuiPeW4i6';

export type Category = {
  name: string;
  icon: LucideIcon;
};

export const categories: Category[] = [
  { name: 'Agriculture', icon: Sprout },
  { name: 'Packaging & Printing', icon: PackageCheck },
  { name: 'Construction', icon: Building2 },
  { name: 'Industrial Supplies', icon: Wrench },
  { name: 'Food & Beverage', icon: Boxes },
  { name: 'Electronics', icon: Factory },
  { name: 'Fashion & Textiles', icon: Shirt },
  { name: 'Logistics', icon: Truck },
  { name: 'Machinery', icon: Forklift },
  { name: 'Office & Business', icon: Printer },
];

export const buyerBenefits = [
  'Discover suppliers by product or industry',
  'Explore supplier capabilities',
  'Compare potential partners',
  'Send structured inquiries',
  'Build new business relationships',
  'Reach beyond existing networks',
];

export const supplierBenefits = [
  'Showcase your products and capabilities',
  'Build a professional digital business profile',
  'Reach buyers beyond your existing network',
  'Receive relevant business inquiries',
  'Present your business with greater clarity',
  'Build credibility online',
];

export const workflow = [
  {
    number: '01',
    title: 'Discover',
    body: 'Search by product, category or business need.',
  },
  {
    number: '02',
    title: 'Evaluate',
    body: 'Explore suppliers and understand their capabilities.',
  },
  {
    number: '03',
    title: 'Connect',
    body: 'Send inquiries and start a direct business conversation.',
  },
  {
    number: '04',
    title: 'Build',
    body: 'Create valuable long-term business relationships.',
  },
];

export const supplierExamples = [
  {
    name: 'PrimePack Nigeria Ltd',
    type: 'Packaging manufacturer',
    location: 'Lagos, Nigeria',
    tags: ['Corrugated cartons', 'Printed packaging', 'Bulk orders'],
    initials: 'PP',
  },
  {
    name: 'Atlas Trade Supply Co.',
    type: 'Industrial distributor',
    location: 'Ogun, Nigeria',
    tags: ['Industrial supplies', 'Procurement', 'Business delivery'],
    initials: 'AT',
  },
  {
    name: 'Coastal Logistics Services',
    type: 'Logistics provider',
    location: 'Port Harcourt, Nigeria',
    tags: ['B2B delivery', 'Freight', 'Distribution'],
    initials: 'CL',
  },
];

export const networkCities = [
  { name: 'Lagos', x: 18, y: 68, delay: 0 },
  { name: 'Ibadan', x: 31, y: 50, delay: 0.2 },
  { name: 'Abuja', x: 53, y: 42, delay: 0.4 },
  { name: 'Kaduna', x: 57, y: 22, delay: 0.6 },
  { name: 'Kano', x: 72, y: 12, delay: 0.8 },
  { name: 'Onitsha', x: 62, y: 63, delay: 1 },
  { name: 'Aba', x: 72, y: 72, delay: 1.2 },
  { name: 'Port Harcourt', x: 78, y: 84, delay: 1.4 },
];
