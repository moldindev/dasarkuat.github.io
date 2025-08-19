import { HelpCircle, Heart, PiggyBank } from "lucide-react";

export function PainPointsSection() {
  const painPoints = [
    {
      icon: HelpCircle,
      title: "Makin Tertinggal di Kelas",
      description: "Di sekolah, guru menjelaskan terlalu cepat. Anak Anda hanya menyalin catatan tanpa benar-benar mengerti, dan takut bertanya karena malu. Setiap bab baru terasa seperti mimpi buruk karena bab sebelumnya saja belum dikuasai."
    },
    {
      icon: Heart,
      title: "Waktu Belajar Penuh Stres",
      description: "Mengerjakan PR menjadi sumber perdebatan. Anda melihat nilai rapor yang menurun dan khawatir dengan masa depannya. Anda tahu dia cerdas, tapi tidak tahu harus membantu dari mana."
    },
    {
      icon: PiggyBank,
      title: "Bimbel Lain Tidak Cocok",
      description: "Anda sudah mencoba les lain, tapi anak \"mudah capek dan jenuh kalau didrill terus-menerus\". Rasanya seperti buang-buang uang karena metode 'satu untuk semua' tidak menyelesaikan masalah utamanya."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-section-title text-foreground mb-8">
            Apakah Situasi Ini Terdengar Familiar?
          </h2>
        </div>

        {/* Pain points grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {painPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div key={index} className="text-center space-y-6 animate-fade-in-up">
                <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-feature-title text-foreground">{point.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Belief deconstruction */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-xl p-8 shadow-soft border-l-4 border-l-primary">
            <p className="text-lg leading-relaxed text-foreground">
              <strong className="text-primary text-xl">
                Masalahnya Bukan Kemalasan, Tapi Fondasi yang Hilang.
              </strong>
              {" "}Seringkali kita berpikir anak kita malas atau 'tidak berbakat' di pelajaran tertentu. Kenyataannya, mereka hanya kehilangan beberapa keping puzzle fundamental dari tahun-tahun sebelumnya. Mustahil membangun gedung pencakar langit di atas fondasi yang retak.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}