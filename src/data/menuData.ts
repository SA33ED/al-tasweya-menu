import koftaImg from "@/assets/kofta.jpg";
import shawarmaImg from "@/assets/shawarma.jpg";
import mixedGrillImg from "@/assets/mixed-grill.jpg";
import mansafImg from "@/assets/mansaf.jpg";
import kabsaImg from "@/assets/kabsa.jpg";
import hummusImg from "@/assets/hummus.jpg";

export interface MenuItemData {
  id: string;
  name: string;
  image: string;
  prices: Array<{
    amount: string;
    price: string;
    unit: string;
  }>;
  category: string;
  description: string;
}

export const menuItems: MenuItemData[] = [
  {
    id: "1",
    name: "كفتة",
    image: koftaImg,
    prices: [
      { amount: "كيلو", price: "475 جنيه", unit: "" },
      { amount: "اتنين كيلو", price: "920 جنيه", unit: "" },
    ],
    category: "لحوم",
    description: "كفته الحاتي الخطيرة "
  },
  {
    id: "2",
    name: "برجر بيتي",
    image: shawarmaImg,
    prices: [
      { amount: "كيلو", price: "425 جنيه", unit: "" },
      { amount: "اتنين كيلو", price: "820 جنيه", unit: "" },
    ],
    category: "لحوم",
    description: "برجر بيتي - الكيلو 12 قطعه كبيرة"
  },
  {
    id: "3",
    name: "حواوشي",
    image: mixedGrillImg,
    prices: [
      { amount: "كيلو", price: "400 جنيه", unit: "" },
      { amount: "اتنين كيلو", price: "770 جنيه", unit: "" },
    ],
    category: "لحوم",
    description: "حواوشي بالخلطه السريه"
  },
  {
    id: "4",
    name: "كوردن بلو",
    image: mansafImg,
    prices: [
      { amount: "كيلو", price: "370 جنيه", unit: "" },
      { amount: "اتنين كيلو", price: "710 جنيه", unit: "" },
    ],
    category: "فراخ",
    description: "كوردن بلو محشي لانشون فراخ و لانشون لحمة حلواني + شرائح الجبنة الشيدر"
  },
  {
    id: "5",
    name: "بانية شركات",
    image: kabsaImg,
    prices: [
      { amount: "كيلو", price: "270 جنيه", unit: "" },
      { amount: "اتنين كيلو", price: "510 جنيه", unit: "" },
    ],
    category: "فراخ",
    description: "بانية شركات بالخلطة الخطيرة"
  },
  {
    id: "6",
    name: "ناجتس فراخ",
    image: hummusImg,
    prices: [
      { amount: "كيلو", price: "270 جنيه", unit: "" },
      { amount: "اتنين كيلو", price: "510 جنيه", unit: "" },
    ],
    category: "فراخ",
    description: "ناجتس فراخ بالخلطة الرهيبة"
  },
  {
    id: "7",
    name: "فراخ متبلة ع الشوي",
    image: hummusImg,
    prices: [
      { amount: "حسب سعر اليوم والوزن", price: null, unit: "" },
    ],
    category: "فراخ",
    description: "فراخ متبلة ع الشوي - حسب سعر اليوم والوزن"
  },
  {
    id: "8",
    name: "شاورما فراخ متبلة",
    image: hummusImg,
    prices: [
      { amount: "حسب سعر اليوم", price: null, unit: "" },
    ],
    category: "فراخ",
    description: "شاورما فراخ متبلة - حسب سعر اليوم"
  },
  {
    id: "9",
    name: "لمون مخلل",
    image: hummusImg,
    prices: [
      { amount: "البرطمان", price: "50 جنيه", unit: "" },
    ],
    category: "مقبلات",
    description: "لمون مخلل بالعصفر وحبة البركه"
  },
  {
    id: "10",
    name: "هريسه الشطه",
    image: hummusImg,
    prices: [
      { amount: "البرطمان", price: "35 جنيه", unit: "" },
    ],
    category: "مقبلات",
    description: "هريسه الشطه الحارة والبارده"
  },
];