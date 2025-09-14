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
    price: number;
    unit: string;
  }>;
  category: string;
  description: string;
}

export const menuItems: MenuItemData[] = [
  {
    id: "1",
    name: "كفتة مشوية",
    image: koftaImg,
    prices: [
      { amount: "كيلو", price: 850, unit: "" },
      { amount: "اتنين كيلو", price: 1600, unit: "" },
      { amount: "نص كيلو", price: 450, unit: "" }
    ],
    category: "لحوم مشوية",
    description: "كفتة طازجة محضرة من أجود أنواع اللحم البقري مع الخضار والبهارات العربية الأصيلة"
  },
  {
    id: "2",
    name: "شاورما لحمة",
    image: shawarmaImg,
    prices: [
      { amount: "كيلو", price: 750, unit: "" },
      { amount: "نص كيلو", price: 400, unit: "" },
      { amount: "ربع كيلو", price: 220, unit: "" }
    ],
    category: "شاورما",
    description: "شاورما لحمة طازجة مع الخضار والصلصات الشهية والخبز العربي الطازج"
  },
  {
    id: "3",
    name: "مشكل مشاوي",
    image: mixedGrillImg,
    prices: [
      { amount: "كيلو", price: 950, unit: "" },
      { amount: "نص كيلو", price: 500, unit: "" },
      { amount: "طبق فردي", price: 180, unit: "" }
    ],
    category: "لحوم مشوية",
    description: "تشكيلة متنوعة من اللحوم المشوية تشمل الكباب والكفتة وقطع اللحم الطازجة"
  },
  {
    id: "4",
    name: "منسف أردني",
    image: mansafImg,
    prices: [
      { amount: "طبق كبير", price: 320, unit: "" },
      { amount: "طبق وسط", price: 220, unit: "" },
      { amount: "طبق فردي", price: 150, unit: "" }
    ],
    category: "أطباق تراثية",
    description: "منسف أردني أصيل مع لحم الغنم والأرز والجميد واللبن الرائب"
  },
  {
    id: "5",
    name: "كبسة دجاج",
    image: kabsaImg,
    prices: [
      { amount: "دجاجة كاملة", price: 280, unit: "" },
      { amount: "نص دجاجة", price: 160, unit: "" },
      { amount: "طبق فردي", price: 120, unit: "" }
    ],
    category: "أرز ودجاج",
    description: "كبسة دجاج على الطريقة السعودية مع الأرز البسمتي والبهارات الخاصة"
  },
  {
    id: "6",
    name: "حمص بالطحينة",
    image: hummusImg,
    prices: [
      { amount: "طبق كبير", price: 80, unit: "" },
      { amount: "طبق وسط", price: 60, unit: "" },
      { amount: "طبق صغير", price: 40, unit: "" }
    ],
    category: "مقبلات",
    description: "حمص كريمي طازج مع زيت الزيتون والطحينة والصنوبر والخبز العربي"
  }
];