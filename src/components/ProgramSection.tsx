import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

export function ProgramSection() {
  const [formData, setFormData] = useState({
    namaOrangTua: "",
    email: "",
    nomorWhatsApp: "",
    kelasAnak: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.namaOrangTua || !formData.email || !formData.nomorWhatsApp || !formData.kelasAnak) {
      toast({
        title: "Form belum lengkap",
        description: "Mohon isi semua field yang diperlukan.",
        variant: "destructive",
      });
      return;
    }

    // Create WhatsApp message
    const message = `Halo, saya tertarik dengan Program "Dasar Kuat".

Nama Orang Tua: ${formData.namaOrangTua}
Email: ${formData.email}
Nomor WhatsApp: ${formData.nomorWhatsApp}
Kelas Anak: ${formData.kelasAnak === 'kelas-10' ? 'Kelas 10' : 'Kelas 11'}

Saya ingin menjadwalkan konsultasi dan diagnosa belajar gratis untuk anak saya. Terima kasih.`;

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Reset form
    setFormData({
      namaOrangTua: "",
      email: "",
      nomorWhatsApp: "",
      kelasAnak: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const steps = [
    {
      number: "1",
      title: "Diagnosa Mendalam",
      description: "Kami melakukan tes diagnostik unik untuk memetakan secara presisi semua konsep yang terlewat, mulai dari tingkat SMP."
    },
    {
      number: "2", 
      title: "Rencana Belajar Personal",
      description: "Berdasarkan hasil diagnosa, kami menyusun kurikulum yang 100% disesuaikan untuk anak Anda, fokus pada apa yang benar-benar ia butuhkan."
    },
    {
      number: "3",
      title: "Sesi Interaktif & Mendukung", 
      description: "Belajar dalam kelompok super kecil (maks. 3 siswa) bersama tutor terlatih yang sabar dan mengutamakan pemahaman konsep."
    }
  ];

  return (
    <section id="cta-section" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Program introduction */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-section-title text-primary mb-6">
            Memperkenalkan Program "Dasar Kuat"
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sebuah program bimbingan yang dirancang secara sistematis untuk menemukan dan memperbaiki setiap celah pemahaman fundamental anak Anda dalam Matematika, Fisika, dan Kimia.
          </p>
        </div>

        {/* How it works */}
        <div className="mb-16">
          <h3 className="text-feature-title text-center text-foreground mb-12">
            Bagaimana Cara Kerjanya?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center space-y-4 animate-fade-in-up">
                <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                </div>
                <h4 className="text-xl font-semibold text-foreground">{step.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Founder's message */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto bg-card rounded-xl p-8 shadow-soft border-l-4 border-l-accent">
            <blockquote className="text-lg italic text-foreground leading-relaxed mb-4">
              "Sebagai seorang pendidik, saya melihat terlalu banyak siswa cerdas yang menyerah karena merasa tertinggal. 'Dasar Kuat' lahir dari keyakinan bahwa setiap anak berhak mendapatkan kesempatan kedua untuk benar-benar memahami, bukan hanya menghafal. Misi kami sederhana: mengembalikan kepercayaan diri mereka, satu konsep pada satu waktu."
            </blockquote>
            <cite className="text-accent font-semibold">- Ahmad Ramadhan, Founder Dasar Kuat</cite>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-feature-title text-foreground mb-4">
                Siap Mengubah Cerita Akademis Anak Anda?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Ambil langkah pertama hari ini. Jadwalkan sesi konsultasi dan diagnosa belajar non-komitmen <strong className="text-accent">GRATIS</strong> untuk mengetahui secara pasti di mana letak masalahnya. Kami akan memberikan laporan awal dan menunjukkan bagaimana kami bisa membantu.
              </p>
              <p className="text-sm text-muted-foreground">
                <em>Slot untuk sesi gratis terbatas setiap bulannya untuk menjaga kualitas.</em>
              </p>
            </div>

            {/* Contact form */}
            <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
              <div className="space-y-2">
                <Label htmlFor="namaOrangTua">Nama Orang Tua *</Label>
                <Input
                  id="namaOrangTua"
                  value={formData.namaOrangTua}
                  onChange={(e) => handleInputChange("namaOrangTua", e.target.value)}
                  placeholder="Masukkan nama lengkap Anda"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="nama@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="nomorWhatsApp">Nomor WhatsApp *</Label>
                <Input
                  id="nomorWhatsApp"
                  value={formData.nomorWhatsApp}
                  onChange={(e) => handleInputChange("nomorWhatsApp", e.target.value)}
                  placeholder="08xxxxxxxxxx"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="kelasAnak">Kelas Anak Saat Ini *</Label>
                <Select value={formData.kelasAnak} onValueChange={(value) => handleInputChange("kelasAnak", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih kelas anak" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kelas-10">Kelas 10</SelectItem>
                    <SelectItem value="kelas-11">Kelas 11</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" variant="cta" size="xl" className="w-full font-bold">
                Jadwalkan Konsultasi Gratis Saya
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}