import { useState } from "react";
import Header from "@/components/Header";
import MenuItem from "@/components/MenuItem";
import Footer from "@/components/Footer";
import { menuItems } from "@/data/menuData";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("الكل");
  
  // الحصول على الفئات الفريدة
  const categories = ["الكل", ...Array.from(new Set(menuItems.map(item => item.category)))];
  
  // تصفية العناصر حسب الفئة المختارة
  const filteredItems = selectedCategory === "الكل" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* الهيدر */}
      <Header />
      
      {/* المنيو */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-amiri text-4xl md:text-5xl font-bold text-foreground mb-4">
            منيو ع التسويه
          </h2>
          {/* <p className="font-cairo text-lg text-muted-foreground max-w-2xl mx-auto">
            اختر من تشكيلة واسعة من الأطباق العربية الشهية المحضرة بأجود المكونات
          </p> */}
        </div>
        
        {/* فلاتر الفئات */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-in-up">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`cursor-pointer px-6 py-3 text-base font-cairo font-semibold transition-all duration-300 hover:scale-105 ${
                selectedCategory === category 
                  ? "bg-gradient-hero text-primary-foreground shadow-warm" 
                  : "hover:bg-accent"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
        
        {/* شبكة عناصر المنيو */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <MenuItem
                name={item.name}
                image={item.image}
                prices={item.prices}
                category={item.category}
                description={item.description}
              />
            </div>
          ))}
        </div>
        
        {/* رسالة عدم وجود عناصر */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="font-cairo text-lg text-muted-foreground">
              لا توجد أطباق في هذه الفئة حالياً
            </p>
          </div>
        )}
      </main>
      
      {/* الفوتر */}
      <Footer />
    </div>
  );
};

export default Index;
