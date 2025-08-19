import confidentStudentImg from "@/assets/confident-student.jpg";
import parentChildStudyingImg from "@/assets/parent-child-studying.jpg";
import progressReportImg from "@/assets/progress-report.jpg";

export function OutcomesSection() {
  const outcomes = [
    {
      image: confidentStudentImg,
      title: "Dari Cemas Menjadi Percaya Diri",
      description: "Anak Anda tidak lagi takut saat guru memanggil namanya. Ia mulai aktif bertanya, mengerti penjelasan, dan bahkan bisa membantu temannya. Matematika dan Sains bukan lagi momok, melainkan tantangan yang bisa ditaklukkan."
    },
    {
      image: parentChildStudyingImg,
      title: "Dari Perdebatan Menjadi Diskusi",
      description: "Waktu mengerjakan PR menjadi lebih tenang dan produktif. Anda tidak lagi harus mengingatkan terus-menerus. Anda melihat anak Anda mulai belajar mandiri dengan rasa ingin tahu yang tulus."
    },
    {
      image: progressReportImg,
      title: "Dari Stagnan Menjadi Berkembang",
      description: "Anda membuka laporan kemajuan dan melihat bukti nyata: nilai yang membaik, pemahaman yang mendalam, dan yang terpenting, anak Anda kembali bersemangat dengan sekolah."
    }
  ];

  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-section-title text-foreground mb-8">
            Bayangkan Kehidupan Akademis yang Berbeda...
          </h2>
        </div>

        {/* Outcomes blocks */}
        <div className="space-y-16 mb-16">
          {outcomes.map((outcome, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } animate-fade-in-up`}
            >
              <div className="lg:w-1/2">
                <img 
                  src={outcome.image} 
                  alt={outcome.title}
                  className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-soft"
                />
              </div>
              <div className="lg:w-1/2 space-y-4">
                <h3 className="text-feature-title text-primary">{outcome.title}</h3>
                <p className="text-lg leading-relaxed text-foreground">
                  {outcome.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* New paradigm introduction */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
            <p className="text-lg leading-relaxed text-foreground text-center">
              Berhenti memaksa anak untuk 'mengejar ketertinggalan' dengan metode yang sama. Untuk hasil yang berbeda, kita butuh pendekatan baru.{" "}
              <strong className="text-primary text-xl">
                Saatnya membangun kembali fondasi yang hilang, bukan menambal keretakan.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}