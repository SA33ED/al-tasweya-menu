import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PriceOption {
  amount: string;
  price: string;
  unit: string;
}

interface MenuItemProps {
  name: string;
  image: string;
  prices: PriceOption[];
  category?: string;
  description?: string;
}

const MenuItem = ({ name, image, prices, category, description }: MenuItemProps) => {
  return (
    <Card className="group overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-2 animate-scale-in bg-gradient-card border-0">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-contain transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {category && (
          <Badge className="absolute top-3 right-3 bg-gradient-accent text-secondary-foreground font-cairo font-semibold">
            {category}
          </Badge>
        )}
      </div>
      
      <CardContent className="p-6">
        <h3 className="font-amiri text-xl font-bold text-foreground mb-2 text-right">
          {name}
        </h3>
        
        {description && (
          <p className="text-muted-foreground text-sm mb-4 text-right font-cairo leading-relaxed">
            {description}
          </p>
        )}
        
        <div className="space-y-2">
          {prices.map((priceOption, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 px-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors duration-200"
            >              
              <span className="font-cairo text-foreground font-medium">
                {priceOption.amount} {priceOption.unit}
              </span>
              <span className="font-cairo text-lg font-bold text-primary">
                {priceOption.price}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuItem;