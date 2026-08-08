export interface Cuisine {
  id: string;
  name: string;
  slug: string;
  type: string;
  description: string;
  underDescription: string;
  meta: string;
  highlights: string[];
}

export const cuisines: Cuisine[] = [
  {
    id: 'italiano',
    name: 'Italiensk Catering',
    slug: 'italiano',
    type: 'Italiensk buffé',
    description:
      'Letar du efter Italiensk Catering i Stockholm? Välkommen till Amore Catering! Vi specialiserar oss på autentisk italiensk mat med passion för traditioner och kvalitet. Vi är en liten cateringfirma med erfarenhet sedan 2016 av att leverera högklassig italiensk mat för både privatpersoner och företag i Stockholmsområdet. Beställ din nästa italienska catering hos oss!',
    underDescription:
      'Italiensk catering är vår specialitet. Vi arbetar med autentiska italienska recept och använder endast färska, högkvalitativa ingredienser. Från klassisk pasta och risotto till grillade kötter och fisk, allt tillreds med passion och kärlek till italiensk matkultur. Vi erbjuder både vegetariska och veganska alternativ för att passa alla. Vårt sortiment inkluderar allt från eleganta förrätter till läckra pastarätter och dessertklassiker. Och vår specialitet, italiensk Gelato, tillverkas på simpla råvaror för att skapa en exklusiv och delikat produkt.',
    meta: 'Italiensk catering i Stockholm – autentisk italiensk mat för företagsevenemang, bröllop och privata fester.',
    highlights: [
      'Autentiska italienska recept',
      'Färska ingredienser',
      'Italiensk gelato',
    ],
  },
  {
    id: 'julbord',
    name: 'Julbord',
    slug: 'julbord',
    type: 'Julbord catering',
    description:
      'Söker du julbord catering i Stockholm? Amore Catering levererar ett smakrikt, klassiskt julbord med omsorgsfullt tillagade rätter och svensk julstämning. Vi kan ordna ett komplett julbord för företag, kontor eller privata fester under hela vintersäsongen.',
    underDescription:
      'Vårt julbord kombinerar traditionella smaker och modern cateringkomfort. Vi erbjuder allt från julskinka och köttbullar till Jansson, sillinläggningar och vegetariska alternativ. Allt är anpassat för leverans eller servering på plats och levereras med eleganta uppläggningar.',
    meta: 'Julbord catering i Stockholm – komplett levererat julbord för företag, kontor och privata sammankomster.',
    highlights: [
      'Klassiska julbordssmaker',
      'Vegetariska julalternativ',
      'Komplett leverans och servering',
    ],
  },
  {
    id: 'smorgastarta',
    name: 'Smörgåstårta',
    slug: 'smorgastarta',
    type: 'Smörgåstårta catering',
    description:
      'Smörgåstårta till festen, vacker, smakrik och lätt att servera. Amore Catering skapar smörgåstårtor med fräscha fyllningar som lax, räkor, skaldjur och vegetariska alternativ. Perfekt till möten, studentfester och kalas.',
    underDescription:
      'Vår smörgåstårta är designad för både smak och utseende. Vi bygger den med fint bröd, krämiga fyllningar och färska toppningar, så att varje tårta blir ett smakfullt blickfång som fungerar utmärkt vid mingel eller sittande servering.',
    meta: 'Smörgåstårta catering i Stockholm – elegant smörgåstårta för fest, studentfirande och firmamöten.',
    highlights: [
      'Färska och smakrika fyllningar',
      'Presentabel leverans',
      'Vegetariska alternativ',
    ],
  },
  {
    id: 'studentcatering',
    name: 'Student Catering',
    slug: 'studentcatering',
    type: 'Studentcatering',
    description:
      'Student catering i Stockholm för mottagningar, sittningar och fester. Amore Catering levererar flexibla menyer som passar studentlivet, med bufféer, plockmat, smörgåstårta och fika som gör firandet enkelt och smakrikt.',
    underDescription:
      'Studentcatering från Amore Catering är prisvärd och enkel att ordna. Vi hjälper dig välja rätt kombination av rätter för både stora och små sällskap, med vegetariska alternativ och klassiska favoriter som är lätta att dela vid studentfirandet.',
    meta: 'Student catering i Stockholm – prisvärd och festlig mat för studentmottagningar, sittningar och utspring.',
    highlights: [
      'Prisvärd studentmeny',
      'Skräddarsydda alternativ för större sällskap',
      'Smidiga leverans och upphämtningslösningar',
    ],
  },
];
