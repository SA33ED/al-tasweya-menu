const Footer = () => {
  return (
    <footer className="bg-gradient-accent text-secondary-foreground py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          {/* اسم المطعم */}
          {/* <div>
            <h3 className="font-amiri text-3xl font-bold mb-2">ع التسويه</h3>
            <div className="w-16 h-1 bg-secondary-foreground mx-auto rounded-full"></div>
          </div> */}
          
          {/* المعلومات */}
            <div className="space-y-2">
              <h4 className="font-cairo font-bold text-lg">اتصل بنا</h4>
              <p className="font-cairo font-bold text-lg">01021721249</p>
            </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;