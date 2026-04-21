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
      'Letar du efter Italiensk Catering i Stockholm? Välkommen till Amore Catering! Vi specialiserar oss på autentisk italiensk mat med passion för traditioner och kvalitet. Vi är en liten cateringfirma med 30 års erfarenhet av att leverera högklassig italiensk mat för både privatpersoner och företag i Stockholmsområdet. Beställ din nästa italienska catering hos oss!',
    underDescription:
      'Italiensk catering är vår specialitet. Vi arbetar med autentiska italienska recept och använder endast färska, högkvalitativa ingredienser. Från klassisk pasta och risotto till grillade kötter och fisk — allt tillreds med passion och kärlek till italiensk matkultur. Vi erbjuder både vegetariska och veganska alternativ för att passa alla. Vårt sortiment inkluderar allt från eleganta förrätter till läckra pastarätter och dessertklassiker. Och vår specialitet, italiensk Gelato, tillverkas på simpla råvaror för att skapa en exklusiv och delikat produkt.',
    meta: 'Italiensk catering i Stockholm – autentisk italiensk mat för företagsevenemang, bröllop och privata fester.',
    highlights: [
      'Autentiska italienska recept',
      'Färska ingredienser',
      'Italiensk gelato',
    ],
  },
];
