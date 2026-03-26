export interface Area {
  id: string;
  name: string;
  slug: string;
  description: string;
  underDescription: string;
  meta: string;
  highlights: string[];
}
export const areas: Area[] = [
  {
    id: 'vasastan',
    name: 'Vasastan',
    slug: 'vasastan',
    description:
      'Letar du efter Catering Vasastan? Välkommen till Amore Catering! Vi är en liten cateringfirma med 30 års erfarenhet av att leverera högklassig och smarrig catering med allt från lättare maträtter, smörgåsar och wraps och vi jobbar med både privatpersoner och företag i Stockholmsområdet. Beställ din nästa Catering Huddinge hos oss!',
    underDescription:
      'Smörgåsar och wraps är enligt oss den perfekta cateringmaten. De går att anpassa för alla typer av evenemang, aptiter, smakriktningar och tider på dygnet och de går att variera i det oändliga. I vårt sortiment erbjuder vi bland annat både vegetariska och veganska wraps och smörgåsar för att det ska kunna passa alla. Hos oss kan du välja mellan allt från lunchmackor och wraps till lyxbakelser. Och så smörgåstårta, förstås! Dessutom får ni inte missa vår specialitet, italienska Gelato som tillverkas på simpla råvaror för att skapa en exklusiv och delikat produkt.',
    meta: 'Hemlagad catering levererat till Vasastan – färsk mat för företag och privata event i centrala Stockholm.',
    highlights: [
      'Företagsluncher & konferenser',
      'Privata middagar',
      'Leverans inom 24h',
    ],
  },
  {
    id: 'sodermalm',
    name: 'Södermalm',
    slug: 'sodermalm',
    description:
      'Letar du efter Catering Södermalm? Välkommen till Amore Catering! Vi är en liten cateringfirma med 30 års erfarenhet av att leverera högklassig och smarrig catering med allt från lättare maträtter, smörgåsar och wraps och vi jobbar med både privatpersoner och företag i Stockholmsområdet. Beställ din nästa Catering Huddinge hos oss!',
    underDescription:
      'Smörgåsar och wraps är enligt oss den perfekta cateringmaten. De går att anpassa för alla typer av evenemang, aptiter, smakriktningar och tider på dygnet och de går att variera i det oändliga. I vårt sortiment erbjuder vi bland annat både vegetariska och veganska wraps och smörgåsar för att det ska kunna passa alla. Hos oss kan du välja mellan allt från lunchmackor och wraps till lyxbakelser. Och så smörgåstårta, förstås! Dessutom får ni inte missa vår specialitet, italienska Gelato som tillverkas på simpla råvaror för att skapa en exklusiv och delikat produkt.',
    meta: 'Hemlagad catering levererat till ditt hem i Södermalm – perfekt för fester, middagar och företagsevent.',
    highlights: [
      'Buffé & sittande middagar',
      'Fester & firanden',
      'Flexibla menyer',
    ],
  },
  {
    id: 'huddinge',
    name: 'Huddinge',
    slug: 'huddinge',
    description:
      'Letar du efter Catering Huddinge? Välkommen till Amore Catering! Vi är en liten cateringfirma med 30 års erfarenhet av att leverera högklassig och smarrig catering med allt från lättare maträtter, smörgåsar och wraps och vi jobbar med både privatpersoner och företag i Stockholmsområdet. Beställ din nästa Catering Huddinge hos oss!',
    underDescription:
      'Smörgåsar och wraps är enligt oss den perfekta cateringmaten. De går att anpassa för alla typer av evenemang, aptiter, smakriktningar och tider på dygnet och de går att variera i det oändliga. I vårt sortiment erbjuder vi bland annat både vegetariska och veganska wraps och smörgåsar för att det ska kunna passa alla. Hos oss kan du välja mellan allt från lunchmackor och wraps till lyxbakelser. Och så smörgåstårta, förstås! Dessutom får ni inte missa vår specialitet, italienska Gelato som tillverkas på simpla råvaror för att skapa en exklusiv och delikat produkt.',
    meta: 'Färsk mat direkt till din event i Huddinge – professionell catering med hemlagad kvalitet.',
    highlights: [
      'Bröllop & familjeträffar',
      'Företagsevent',
      'Stora & små sällskap',
    ],
  },
  {
    id: 'lidingo',
    name: 'Lidingö',
    slug: 'lidingo',
    description:
      'Letar du efter Catering Lidingö? Välkommen till Amore Catering! Vi är en liten cateringfirma med 30 års erfarenhet av att leverera högklassig och smarrig catering med allt från lättare maträtter, smörgåsar och wraps och vi jobbar med både privatpersoner och företag i Stockholmsområdet. Beställ din nästa catering hos oss!',
    underDescription:
      'Smörgåsar och wraps är enligt oss den perfekta cateringmaten. De går att anpassa för alla typer av evenemang, aptiter, smakriktningar och tider på dygnet och de går att variera i det oändliga. I vårt sortiment erbjuder vi bland annat både vegetariska och veganska wraps och smörgåsar för att det ska kunna passa alla. Hos oss kan du välja mellan allt från lunchmackor och wraps till lyxbakelser. Och så smörgåstårta, förstås! Dessutom får ni inte missa vår specialitet, italienska Gelato som tillverkas på simpla råvaror för att skapa en exklusiv och delikat produkt.',
    meta: 'Catering levererat till Lidingö – färsk mat för privatpersoner och företag på Stockholms norra sida.',
    highlights: ['Företagsluncher & möten', 'Familjefester', 'Snabb leverans'],
  },
  {
    id: 'nacka',
    name: 'Nacka',
    slug: 'nacka',
    description:
      'Letar du efter Catering Nacka? Välkommen till Amore Catering! Vi är en liten cateringfirma med 30 års erfarenhet av att leverera högklassig och smarrig catering med allt från lättare maträtter, smörgåsar och wraps och vi jobbar med både privatpersoner och företag i Stockholmsområdet. Beställ din nästa catering hos oss!',
    underDescription:
      'Smörgåsar och wraps är enligt oss den perfekta cateringmaten. De går att anpassa för alla typer av evenemang, aptiter, smakriktningar och tider på dygnet och de går att variera i det oändliga. I vårt sortiment erbjuder vi bland annat både vegetariska och veganska wraps och smörgåsar för att det ska kunna passa alla. Hos oss kan du välja mellan allt från lunchmackor och wraps till lyxbakelser. Och så smörgåstårta, förstås! Dessutom får ni inte missa vår specialitet, italienska Gelato som tillverkas på simpla råvaror för att skapa en exklusiv och delikat produkt.',
    meta: 'Hemlagad catering till Nacka – perfekt för lunch, fester och företagsevent.',
    highlights: [
      'Buffé & sittande middagar',
      'Privatfester',
      'Flexibla portionstorlekar',
    ],
  },
  {
    id: 'ostermalm',
    name: 'Östermalm',
    slug: 'ostermalm',
    description:
      'Letar du efter Catering Östermalm? Välkommen till Amore Catering! Vi är en liten cateringfirma med 30 års erfarenhet av att leverera högklassig och smarrig catering med allt från lättare maträtter, smörgåsar och wraps och vi jobbar med både privatpersoner och företag i Stockholmsområdet. Beställ din nästa catering hos oss!',
    underDescription:
      'Smörgåsar och wraps är enligt oss den perfekta cateringmaten. De går att anpassa för alla typer av evenemang, aptiter, smakriktningar och tider på dygnet och de går att variera i det oändliga. I vårt sortiment erbjuder vi bland annat både vegetariska och veganska wraps och smörgåsar för att det ska kunna passa alla. Hos oss kan du välja mellan allt från lunchmackor och wraps till lyxbakelser. Och så smörgåstårta, förstås! Dessutom får ni inte missa vår specialitet, italienska Gelato som tillverkas på simpla råvaror för att skapa en exklusiv och delikat produkt.',
    meta: 'Gourmet catering till Östermalm – högklassig mat för exklusiva event och affärsluncher.',
    highlights: ['Affärsluncher', 'Exklusiva event', 'Premium menyer'],
  },
  {
    id: 'skarholmen',
    name: 'Skärholmen',
    slug: 'skarholmen',
    description:
      'Letar du efter Catering Skärholmen? Välkommen till Amore Catering! Vi är en liten cateringfirma med 30 års erfarenhet av att leverera högklassig och smarrig catering med allt från lättare maträtter, smörgåsar och wraps och vi jobbar med både privatpersoner och företag i Stockholmsområdet. Beställ din nästa catering hos oss!',
    underDescription:
      'Smörgåsar och wraps är enligt oss den perfekta cateringmaten. De går att anpassa för alla typer av evenemang, aptiter, smakriktningar och tider på dygnet och de går att variera i det oändliga. I vårt sortiment erbjuder vi bland annat både vegetariska och veganska wraps och smörgåsar för att det ska kunna passa alla. Hos oss kan du välja mellan allt från lunchmackor och wraps till lyxbakelser. Och så smörgåstårta, förstås! Dessutom får ni inte missa vår specialitet, italienska Gelato som tillverkas på simpla råvaror för att skapa en exklusiv och delikat produkt.',
    meta: 'Catering till Skärholmen – läckra smörgåsar och tårtor för alla typer av sammankomster.',
    highlights: [
      'Smörgåstårtor',
      'Barn- & familjekalas',
      'Stora beställningar',
    ],
  },
  {
    id: 'bromma',
    name: 'Bromma',
    slug: 'bromma',
    description:
      'Letar du efter Catering Bromma? Välkommen till Amore Catering! Vi är en liten cateringfirma med 30 års erfarenhet av att leverera högklassig och smarrig catering med allt från lättare maträtter, smörgåsar och wraps och vi jobbar med både privatpersoner och företag i Stockholmsområdet. Beställ din nästa catering hos oss!',
    underDescription:
      'Smörgåsar och wraps är enligt oss den perfekta cateringmaten. De går att anpassa för alla typer av evenemang, aptiter, smakriktningar och tider på dygnet och de går att variera i det oändliga. I vårt sortiment erbjuder vi bland annat både vegetariska och veganska wraps och smörgåsar för att det ska kunna passa alla. Hos oss kan du välja mellan allt från lunchmackor och wraps till lyxbakelser. Och så smörgåstårta, förstás! Dessutom får ni inte missa vår specialitet, italienska Gelato som tillverkas på simpla råvaror för att skapa en exklusiv och delikat produkt.',
    meta: 'Färsk catering levererat till Bromma – hemlagad mat för företag och privatpersoner.',
    highlights: ['Företagsevent', 'Privata fester', 'Italiensk gelato'],
  },
  {
    id: 'solna',
    name: 'Solna',
    slug: 'solna',
    description:
      'Letar du efter Catering Solna? Välkommen till Amore Catering! Vi är en liten cateringfirma med 30 års erfarenhet av att leverera högklassig och smarrig catering med allt från lättare maträtter, smörgåsar och wraps och vi jobbar med både privatpersoner och företag i Stockholmsområdet. Beställ din nästa catering hos oss!',
    underDescription:
      'Smörgåsar och wraps är enligt oss den perfekta cateringmaten. De går att anpassa för alla typer av evenemang, aptiter, smakriktningar och tider på dygnet och de går att variera i det oändliga. I vårt sortiment erbjuder vi bland annat både vegetariska och veganska wraps och smörgåsar för att det ska kunna passa alla. Hos oss kan du välja mellan allt från lunchmackor och wraps till lyxbakelser. Och så smörgåstårta, förstás! Dessutom får ni inte missa vår specialitet, italienska Gelato som tillverkas på simpla råvaror för att skapa en exklusiv och delikat produkt.',
    meta: 'Italiensk catering levererat till Solna – gelato och hemlagad mat av högsta kvalitet.',
    highlights: ['Italiensk gelato', 'Möten & konferenser', 'Företagsluncher'],
  },
  {
    id: 'stockholm',
    name: 'Stockholm',
    slug: 'stockholm',
    description:
      'Letar du efter Catering Stockholm? Välkommen till Amore Catering! Vi är en liten cateringfirma med 30 års erfarenhet av att leverera högklassig och smarrig catering med allt från lättare maträtter, smörgåsar och wraps och vi jobbar med både privatpersoner och företag i Stockholmsområdet. Beställ din nästa catering hos oss!',
    underDescription:
      'Smörgåsar och wraps är enligt oss den perfekta cateringmaten. De går att anpassa för alla typer av evenemang, aptiter, smakriktningar och tider på dygnet och de går att variera i det oändliga. I vårt sortiment erbjuder vi bland annat både vegetariska och veganska wraps och smörgåsar för att det ska kunna passa alla. Hos oss kan du välja mellan allt från lunchmackor och wraps till lyxbakelser. Och så smörgåstårta, förstás! Dessutom får ni inte missa vår specialitet, italienska Gelato som tillverkas på simpla råvaror för att skapa en exklusiv och delikat produkt.',
    meta: 'Professionell catering i Stockholm – allt från lunchmackor till lyxiga middagar för alla event.',
    highlights: [
      'Alla typer av event',
      'Stockholmsövergripande',
      'Samma dag leverans',
    ],
  },
];
