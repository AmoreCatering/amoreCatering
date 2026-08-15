export interface Cuisine {
  id: string;
  name: string;
  slug: string;
  type: string;
  description: string;
  underDescription: string;
  meta: string;
  highlights: string[];
  // Minimum price as either a number in SEK or a display string
  priceFrom?: number | string;
  // Unit for the price, e.g. 'person' or 'portion'
  priceUnit?: string;
}

export const cuisines: Cuisine[] = [
  {
    id: 'italiano',
    name: 'Italiensk Catering',
    slug: 'italiano',
    type: 'Italiensk buffé',
    description:
      'Letar du efter italiensk mat i Stockholm eller italiensk catering för företag i Stockholm? Hör av dig till Amore catering så hjälper vi dig att planera maten för ditt nästa event.',
    underDescription:
      'Vi erbjuder italiensk mat med genuina smaker, noggrant utvalda råvaror och med stor kärlek till det italienska köket. Oavsett om du planerar ett företagsevent, bröllop, mingel, en lunch, födelsedag eller större fest hjälper vi dig att skapa en smakfull cateringupplevelse.',
    meta: 'Italiensk catering i Stockholm – autentisk italiensk mat för företagsevenemang, bröllop och privata fester.',
    highlights: [
      'Italiensk färsk och smakrik mat',
      'Passar både avslappnande tillställningar och exklusiva evenemang',
      'Vegetariska alternativ',
    ],
    priceFrom: '195 SEK/person',
  },
  {
    id: 'julbord',
    name: 'Julbord',
    slug: 'julbord',
    type: 'Julbord catering',
    description:
      'Låt oss på Amore catering skapa ett julbord som passar både företagsfesten, julfirandet, med familjen och årets stora sammankomst. Oavsett om du önskar ett traditionellt svenskt julbord, vegetariskt julbord eller andra alternativ hjälper vi dig hitta en lösning som passar ditt sällskap.',
    underDescription:
      'Vi erbjuder catering i Stockholm, med fokus på god mat och den klassiska julkänslan. Vårt julbord består av välkända favoriter från den svenska julmaten, någgrant tillagade för att göra julfirandet enkelt och smakfullt. Julens mat ska kunna njutas av alla. Därför erbjuder vi alternativ med vegetarisk julmat för dig som vill komplettera julbordet med gröna och smakrika alternativ.',
    meta: 'Julbord catering i Stockholm – komplett levererat julbord för företag, kontor och privata sammankomster.',
    highlights: [
      'Perfekt till både företagsfest och firande med familj',
      'Vegetariska alternativ',
      'Komplett förberedelse och leverans',
    ],
    priceFrom: '345 SEK/person',
  },
  {
    id: 'smorgastarta',
    name: 'Smörgåstårta',
    slug: 'smorgastarta',
    type: 'Smörgåstårta catering',
    description:
      'Letar du efter en god och prisvärd smörgåstårta i Stockholm? Hos Amore Catering hittar du smakrika smörgåstårtor som passar lika bra till födelsedagar och studentmottagningar som till företagsevent och andra festliga tillfällen.',
    underDescription:
      'Välj den fyllning som passar bäst för ditt sällskap. En klassisk smörgåstårta med räkor är ett populärt val för dig som tycker om havets smaker, medan en smörgåstårta med skinka passar dig som föredrar en traditionell och smakrik variant. För dig som vill prova något lite annorlunda kan en italiensk smörgåstårta vara ett spännande alternativ. Med inspiration från det italienska köket får du en smörgåstårta med härliga smaker som skiljer sig från de klassiska varianterna. Vad kostar en smörgåstårta? Pris på smörgåstårta beror bland annat på storlek, antal portioner och vilken fyllning du väljer. Vi erbjuder alternativ för olika budgetar och hjälper dig gärna att hitta en lösning som passar ditt sällskap.',
    meta: 'Smörgåstårta catering i Stockholm – elegant smörgåstårta för fest, studentfirande och firmamöten.',
    highlights: [
      'Räkor, skinka eller italienska smaker? Vi har alternativ som passar olika önskemål och sällskap',
      'Färska och smakrika smörgåstårtor',
      'Vegetariska alternativ',
    ],
    priceFrom: '99 SEK/person',
  },
  {
    id: 'studentcatering',
    name: 'Student Catering',
    slug: 'studentcatering',
    type: 'Studentcatering',
    description:
      'Studenten är en av livets stora dagar och självklart ska den firas med god mat och trevligt sällskap. Med catering för studenten från Amore Catering kan du lägga fokus på att fira studenten, medan vi fixar maten.',
    underDescription:
      'Oavsett om du planerar en mindre studentmottagning hemma eller en större fest för familj och vänner erbjuder vi catering i Stockholm som gör studentfirandet både enklare och festligare.En studentmottagning samlar ofta många gäster med olika smaker och önskemål. Därför passar catering perfekt när du vill kunna bjuda på god och uppskattad mat utan att behöva stå i köket under hela firandet. Vi kan hjälpa dig att hitta en meny som passar just din studentmottagning, oavsett om du önskar en avslappnad buffé, festliga tilltugg eller en komplett måltid.',
    meta: 'Student catering i Stockholm – prisvärd och festlig mat för studentmottagningar.',
    highlights: [
      'Prisvärd studentmeny',
      'Skräddarsydda alternativ för olika sällskap',
      'Smidiga leverans och upphämtningslösningar',
    ],
    priceFrom:
      'Kontakta oss för student catering i Stockholm och berätta om ditt sällskap, dina önskemål och hur du vill fira – så hjälper vi dig att hitta ett upplägg som passar din studentmottagning.',
  },
  {
    id: 'wraps',
    name: 'Wraps',
    slug: 'wraps',
    type: 'Wraps catering',
    description:
      'Söker du wraps catering i Stockholm? Amore Catering erbjuder smakrika wraps med färska ingredienser, perfekta till lunch, möten och evenemang där du vill servera något enkelt och gott.',
    underDescription:
      'Våra wraps är fyllda med välsmakande och färska komponenter och kan anpassas efter dina önskemål. Oavsett om du vill ha klassiska favoriter eller vegetariska alternativ blir varje wrap ett praktiskt och smakrikt val för alla gäster.',
    meta: 'Wraps catering i Stockholm – smakrika wraps till lunch, möten och privata evenemang.',
    highlights: [
      'Färska och smakrika fyllningar',
      'Perfekt till lunch och mingel',
      'Vegetariska alternativ tillgängliga',
    ],
    priceFrom: '105 SEK/person',
  },
];
