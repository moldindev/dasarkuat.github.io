import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export function HeroSection({ onCtaClick }: HeroSectionProps) {
  const benefits = [
    "Pahami Konsep dari Akar: Bukan sekadar hafal rumus, tapi mengerti 'mengapa' di baliknya, menghilangkan kebingungan selamanya.",
    "Belajar Sesuai Kecepatan Anak: Lupakan metode 'drill' yang bikin jenuh. Kurikulum kami personal dan adaptif, fokus pada kemajuan nyata tanpa stres.",
    "Lihat Kemajuan yang Jelas: Dapatkan laporan bulanan yang transparan untuk melihat celah pengetahuan anak Anda terisi dan nilainya mulai membaik."
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-hero opacity-5"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Main headline */}
          <h1 className="text-hero text-foreground leading-tight">
            Anak Anda Merasa Banyak yang{" "}
            <span className="text-primary font-bold">Ketinggalan</span> di 
            Pelajaran Matematika, Fisika, atau Kimia?
          </h1>

          {/* Subheadline */}
          <p className="text-subhero text-muted-foreground max-w-3xl mx-auto">
            Program <strong className="text-primary">"Dasar Kuat"</strong> adalah program bimbingan khusus untuk siswa SMA Kelas 10 & 11 yang merasa kewalahan dan tertinggal. Bukan bimbel intensif biasa, kami membangun kembali fondasi belajar yang hilang agar anak Anda percaya diri dan siap menghadapi tantangan akademis.
          </p>

          {/* Benefits with checkmarks */}
          <div className="space-y-4 text-left max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-soft">
                <div className="flex-shrink-0 w-6 h-6 bg-success rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-success-foreground" />
                </div>
                <p className="text-base text-foreground leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button
              variant="cta"
              size="xl"
              onClick={onCtaClick}
              className="font-bold"
            >
              Dapatkan Diagnosa Belajar Gratis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}