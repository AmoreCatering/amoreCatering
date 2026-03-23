export default function Features() {
  const features = [
    {
      title: 'Hemlagad Kvalitet',
      desc: 'Varje rätt är noggrant lagad med färska ingredienser. Vi använder traditionella metoder för att säkerställa autentisk smak.',
    },
    {
      title: 'Personlig Service',
      desc: 'Vi arbetar nära dig för att förstå dina behov. Från menyplanering till servering - vi tar hand om allt.',
    },
    {
      title: 'Lokal Närvaro',
      desc: 'Vi är baserade i Stockholm och levererar till hela området. Snabb kommunikation och flexibla lösningar.',
    },
  ];

  return (
    <section className="py-16 md:py-24 border-t border-border bg-linear-to-b from-background to-secondary/30">
      <div className="max-w-350 mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Varför Välja Amore Catering?
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-primary to-transparent mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <article
              key={idx}
              className="group relative bg-secondary border border-border rounded-xl p-6 md:p-8 hover:shadow-lg hover:border-accent transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-primary group-hover:-translate-y-0.5 transition-transform duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
