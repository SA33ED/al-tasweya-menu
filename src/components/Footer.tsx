const Footer = () => {
  return (
    <footer className="bg-gradient-accent text-secondary-foreground py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          {/* اسم المطعم */}
          <div>
            <h3 className="font-amiri text-3xl font-bold mb-2">مطعم ع التسويه</h3>
            <div className="w-16 h-1 bg-secondary-foreground mx-auto rounded-full"></div>
          </div>
          
          {/* المعلومات */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <h4 className="font-cairo font-bold text-lg">اتصل بنا</h4>
              <p className="font-cairo">📞 01234567890</p>
              <p className="font-cairo">📞 01098765432</p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-cairo font-bold text-lg">العنوان</h4>
              <p className="font-cairo leading-relaxed">
                شارع الملك فيصل - المدينة<br />
                أمام مسجد النور
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-cairo font-bold text-lg">مواعيد العمل</h4>
              <p className="font-cairo">من السبت إلى الخميس</p>
              <p className="font-cairo">10 ص - 12 م</p>
            </div>
          </div>
          
          {/* خط فاصل */}
          <div className="border-t border-secondary-foreground/20 pt-6 mt-8">
            <p className="font-cairo text-sm">
              © 2024 مطعم ع التسويه - جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;