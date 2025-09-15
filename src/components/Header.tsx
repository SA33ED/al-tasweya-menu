const Header = () => {
  return (
    <header className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* خلفية زخرفية */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-primary-glow rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-primary-glow rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-primary-glow rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* المحتوى الرئيسي */}
      <div className="relative z-10 text-center space-y-6 animate-fade-in">
        <div className="space-y-4">
          <img src="src/assets/logo_bg.png" alt="ع التسويه" className="mx-auto w-40 md:w-64 drop-shadow-lg" />
          <div className="w-32 h-1 bg-primary-glow mx-auto rounded-full shadow-glow"></div>
        </div>
        
        <p className="font-cairo text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed px-4">
          مأكولات ع التسويه محضرة بحب وإتقان
        </p>
        
        {/* <div className="pt-4">
          <div className="inline-flex items-center space-x-reverse space-x-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full px-6 py-3 animate-slide-in-up">
            <span className="font-cairo text-primary-foreground font-semibold">منيو اليوم</span>
            <div className="w-2 h-2 bg-primary-glow rounded-full animate-pulse"></div>
          </div>
        </div> */}
      </div>
      
      {/* تأثير التدرج */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </header>
  );
};

export default Header;