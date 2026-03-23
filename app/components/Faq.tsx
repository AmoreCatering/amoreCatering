const faqs = [
  {
    q: 'Hur långt i förväg måste jag boka?',
    a: 'Vi rekommenderar minst två veckor för att säkerställa bästa möjliga service och ingrediens-kvalitet. För större events kan vi ibland hantera kortare tidsplan.',
  },
  {
    q: 'Erbjuder ni vegetariska/veganska alternativ?',
    a: 'Ja, vi erbjuder både vegetariska och veganska alternativ. Vi kan anpassa menyer för alla dietära preferenser och allergier.',
  },
  {
    q: 'Vilka områden i Stockholm täcker ni?',
    a: 'Vi levererar till hela Stockholm och omkringliggande området. Kontakta oss för att verifiera din specifika plats och eventuella leveranskostnader.',
  },
  {
    q: 'Kan ni servera maten på plats?',
    a: 'Ja, vi erbjuder både leverans och fullständig servering. Vi kan anpassa servicenivån till dina behov och budget.',
  },
  {
    q: 'Erbjuder ni leverans?',
    a: 'Ja, vi erbjuder leverans inom tullarna för 199kr och 299kr utanför tullarna. Ifall du beställer för mer än 6500 blir leveransen gratis.',
  },
  {
    q: 'Kostar det att avboka min beställning?',
    a: 'Ja en avgift på 50% av totala beställningen tas vid avbokning inom 5 dagar av leverans/upphämtning.',
  },
];

export default function Faq() {
  return (
    <section className="py-12 md:py-16 border-t border-border bg-background">
      <div className="max-w-350 mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-primary">
          Vanliga Frågor
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {faqs.map((faq, i) => (
            <article key={i} className="border-b border-border pb-6">
              <h3 className="text-base md:text-lg font-bold mb-3 text-primary">
                {faq.q}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                {faq.a}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
