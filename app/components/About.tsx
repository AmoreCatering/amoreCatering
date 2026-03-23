const offerings = [
  {
    title: 'Anpassad Menyplanering',
    desc: 'Vi skapar menyer som passar din event perfekt.',
  },
  {
    title: 'Leverans & Servering',
    desc: 'Vi levererar och serverar, eller bara maten - du väljer.',
  },
  {
    title: 'Företagsevenemang',
    desc: 'Specialiserade lösningar för konferenser och business dinners.',
  },
  {
    title: 'Bröllop & Privata Fester',
    desc: 'Vi gör dina speciella tillfällen ännu mer minnesvärda.',
  },
];

export default function About() {
  return (
    <section
      id="om"
      className="py-12 md:py-16 border-t border-border bg-background"
    >
      <div className="max-w-350 mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary">
          Om Amore Catering
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <p className="mb-4 leading-relaxed text-foreground/80 text-sm md:text-base">
              Amore Catering startades med en vision att leverera premium
              catering till Stockholm. Vi tror på hemlagad mat med
              gourmet-känsla, där varje detalj spelar roll.
            </p>
            <p className="mb-4 leading-relaxed text-foreground/80 text-sm md:text-base">
              Vårt team består av erfarna kockar med passion för matlagning. Vi
              arbetar noga med ingredienterna och tar tid för smaken. Ingen
              förinlagd mat, allt görs från grunden.
            </p>
            <p className="leading-relaxed text-foreground/80 text-sm md:text-base">
              Från små privata middagar till stora företagsevenemang, vi
              anpassar oss till dina behov. Din gästers upplevelse är vår högsta
              prioritet.
            </p>
          </div>
          <div className="rounded-lg p-4 md:p-8 border border-border bg-secondary">
            <h3 className="text-lg md:text-xl font-bold mb-6 text-primary">
              Vad vi erbjuder
            </h3>
            <div className="space-y-4 text-foreground/80 text-sm md:text-base">
              {offerings.map((o, i) => (
                <div key={i}>
                  <p className="font-semibold text-accent-muted">{o.title}</p>
                  <p className="text-xs md:text-sm">{o.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
