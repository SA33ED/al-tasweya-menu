import koftaImg from "@/assets/kofta.jpg";
import burgerImg from "@/assets/burger.jpg";
import nagetsImg from "@/assets/nagets.jpg";
import banehImg from "@/assets/baneh.jpg";
import shawarmaImg from "@/assets/shawarma.jpg";
import harisaImg from "@/assets/harisa.jpg";
import hawashiImg from "@/assets/hawawshi.jpg";
import kordnImg from "@/assets/kordn.jpg";
import ferakhImg from "@/assets/ferakh.jpg";
import lamonImg from "@/assets/lamon.jpg";
import rengaImg from "@/assets/renga.jpg";
import koftaElferakh from "@/assets/kofta_elferakh.jpg";
import burgerElferakh from "@/assets/burger_elferakh.jpg";
import hawashiElferakhImg from "@/assets/hawawshi_elferakh.jpg";
import stripsImg from "@/assets/strips.jpg";



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
    image: burgerImg,
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
    image: hawashiImg,
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
    image: kordnImg,
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
    image: banehImg,
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
    image: nagetsImg,
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
    image: ferakhImg,
    prices: [
      { amount: "حسب سعر اليوم والوزن", price: null, unit: "" },
    ],
    category: "فراخ",
    description: "فراخ متبلة ع الشوي - حسب سعر اليوم والوزن"
  },
  {
    id: "8",
    name: "شاورما فراخ متبلة",
    image: shawarmaImg,
    prices: [
      { amount: "حسب سعر اليوم", price: null, unit: "" },
    ],
    category: "فراخ",
    description: "شاورما فراخ متبلة - حسب سعر اليوم"
  },
  {
    id: "11",
    name: "رنجه",
    image: rengaImg,
    prices: [
      { amount: "العلبة", price: "160 جنيه", unit: "" },
    ],
    category: "رنجه",
    description: "رنجه بالطحينة وفلفل الوان والزيت واللمون (قطع)"
  },
  {
    id: "9",
    name: "لمون مخلل",
    image: lamonImg,
    prices: [
      { amount: "البرطمان", price: "50 جنيه", unit: "" },
    ],
    category: "مقبلات",
    description: "لمون مخلل بالعصفر وحبة البركه"
  },
  {
    id: "10",
    name: "هريسه الشطه",
    image: harisaImg,
    prices: [
      { amount: "البرطمان", price: "35 جنيه", unit: "" },
    ],
    category: "مقبلات",
    description: "هريسه الشطه الحارة والبارده"
  },
  {
    id: "12",
    name: "كفته الفراخ",
    image: koftaElferakh,
    prices: [
      { amount: "الكيلو", price: "270 جنيه", unit: "" },
      { amount: "اتنين كيلو", price: "520 جنيه", unit: "" },
    ],
    category: "فراخ",
    description: "كفته الفراخ بالخلطة السرية"
  },
  {
    id: "13",
    name: "برجر الفراخ",
    image: burgerElferakh,
    prices: [
      { amount: "الكيلو", price: "270 جنيه", unit: "" },
      { amount: "اتنين كيلو", price: "520 جنيه", unit: "" },
    ],
    category: "فراخ",
    description: "برجر الفراخ بالخلطة السرية"
  },
  {
    id: "14",
    name: "حواوشي الفراخ",
    image: hawashiElferakhImg,
    prices: [
      { amount: "الكيلو", price: "245 جنيه", unit: "" },
      { amount: "اتنين كيلو", price: "460 جنيه", unit: "" },
    ],
    category: "فراخ",
    description: "حواوشي الفراخ بالخلطة السرية"
  },
  {
    id: "15",
    name: "ستربس فراخ",
    image: stripsImg,
    prices: [
      { amount: "الكيلو", price: "280 جنيه", unit: "" },
      { amount: "اتنين كيلو", price: "530 جنيه", unit: "" },
    ],
    category: "فراخ",
    description: "ستربس فراخ بالخلطة السرية"
  },
];