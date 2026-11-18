export interface Area {
  id: string;
  name: string;
  underHeader: string;
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
    underHeader: 'God mat och italiensk catering i Vasastan',
    slug: 'vasastan',
    description:
      'Letar du efter catering i Vasastan som gör din fest, middag eller tillställning extra minnesvärd? Amore Catering erbjuder ett smakrikt utbud av italiensk mat, läckra bufféer och goda rätter för både små och stora sällskap.',
    underDescription:
      'Hos oss hittar du bland annat italienska bufféer, smörgåstårtor, wraps, sallader, tårtor och härliga desserter. Vi erbjuder även lunchcatering för företag och goda alternativ för dig som föredrar vegetarisk eller vegansk mat. Oavsett om du planerar en privat fest, ett företagsevent eller en trevlig lunch hjälper vi dig att hitta rätt mat för tillfället. Beställ enkelt direkt i vår webbshop och välj mellan avhämtning och leverans. Har du särskilda önskemål eller frågor? Kontakta oss gärna!',
    meta: 'Söker du catering i Vasastan? Upptäck italiensk mat, bufféer, smörgåstårtor och lunchcatering från Amore Catering. Beställ enkelt online!',
    highlights: [
      'Italiensk catering och bufféer',
      'Smörgåstårtor, wraps och sallader',
      'Lunchcatering samt veganska och vegetariska val',
    ],
  },
  {
    id: 'sodermalm',
    name: 'Södermalm',
    underHeader: 'Sätt extra smak på festen med Amore Catering på Södermalm',
    slug: 'sodermalm',
    description:
      'Planerar du en fest, födelsedag, middag eller ett företagsevent på Södermalm? Låt Amore Catering hjälpa dig med maten!',
    underDescription:
      'Vi erbjuder catering med inspiration från det italienska köket, smakrika bufféer och ett varierat utbud som passar många olika tillfällen. Välj bland våra italienska maträtter, fräscha sallader, wraps, smörgåstårtor och goda desserter. Är du sugen på något sött erbjuder vi även vanliga tårtor och läckra glasstårtor. Vi tänker också på att alla gäster ska kunna njuta av maten. Därför erbjuder vi anpassade alternativ för både vegetarianer och veganer. Med Amore Catering blir det enklare att bjuda på god mat utan att behöva stå i köket hela dagen. Besök vår webbshop, välj dina favoriter och beställ online. Vi erbjuder både avhämtning och leverans.',
    meta: 'Catering på Södermalm från Amore Catering. Beställ italiensk buffé, smörgåstårtor, sallader, wraps och desserter enkelt online.',
    highlights: [
      'Italiensk mat och bufféer',
      'Smörgåstårtor, wraps och sallader',
      'Tårtor, desserter och anpassade veganska val',
    ],
  },
  {
    id: 'huddinge',
    name: 'Huddinge',
    underHeader: 'Letar du efter god catering i Huddinge? Vi hjälper dig!',
    slug: 'huddinge',
    description:
      'Vi hjälper dig! Oavsett om du planerar ett födelsedagskalas, en familjefest, ett bröllop eller en tillställning på jobbet är god mat en viktig del av upplevelsen.',
    underDescription:
      'Amore Catering erbjuder ett brett utbud av catering för dig i Huddinge. Vi har italiensk mat och bufféer för dig som älskar medelhavets smaker, men också smörgåstårtor, wraps, sallader och läckra desserter. Vill du bjuda på något extra festligt? Våra vanliga tårtor och glasstårtor passar perfekt när det finns något att fira. Vi erbjuder dessutom lunchcatering för företag och kan anpassa maträtter efter önskemål, även för vegetarianer och veganer. Gör det enkelt för dig själv och låt oss hjälpa till med maten. Beställ direkt i vår webbshop och välj avhämtning eller leverans.',
    meta: 'Amore Catering erbjuder catering i Huddinge med italiensk mat, bufféer, smörgåstårtor, tårtor och företagsluncher. Beställ online!',
    highlights: [
      'Italiensk mat och bufféer',
      'Smörgåstårtor, wraps och sallader',
      'Företagslunch samt veganska och vegetariska alternativ',
    ],
  },
  {
    id: 'lidingo',
    name: 'Lidingö',
    underHeader:
      'Gör festen på Lidingö extra god med catering från Amore Catering',
    slug: 'lidingo',
    description:
      'En lyckad fest börjar ofta med riktigt god mat! Ska du ordna en födelsedag, familjemiddag, fest eller ett företagsevenemang på Lidingö? Då kan Amore Catering hjälpa dig att skapa en smakrik upplevelse för dina gäster.',
    underDescription:
      'Vi erbjuder italiensk catering med goda maträtter och härliga bufféer. I vårt sortiment hittar du även smörgåstårtor, wraps, sallader och olika desserter. För speciella tillfällen kan du också beställa vanliga tårtor och glasstårtor. Vi vet att alla gäster har olika önskemål. Därför erbjuder vi även maträtter som kan anpassas för vegetarianer och veganer. Du behöver inte lägga hela dagen på matlagning och förberedelser. Låt oss hjälpa dig istället! Beställ din catering enkelt via Amore Caterings webbshop. Du kan välja avhämtning eller leverans.',
    meta: 'Catering på Lidingö med italiensk mat, bufféer, smörgåstårtor och desserter. Beställ festmat från Amore Catering online!',
    highlights: [
      'Italiensk catering och bufféer',
      'Smörgåstårtor, wraps och sallader',
      'Tårtor och anpassade vegetariska eller veganska rätter',
    ],
  },
  {
    id: 'nacka',
    name: 'Nacka',
    underHeader: 'Italiensk catering och god festmat i Nacka',
    slug: 'nacka',
    description:
      'Italiensk catering och god festmat i Nacka. Letar du efter catering i Nacka som erbjuder något gott för alla? Hos Amore Catering hittar du ett varierat sortiment av mat som passar både vardag och fest.',
    underDescription:
      'Våra italienska bufféer passar utmärkt när du vill bjuda familj, vänner eller kollegor på en härlig måltid. Du kan också välja bland våra smörgåstårtor, wraps, sallader och desserter. För dig som planerar ett kalas eller firande erbjuder vi även vanliga tårtor och glasstårtor som gör tillfället ännu festligare. Vi erbjuder dessutom företagsluncher och specialanpassade maträtter för både vegetarianer och veganer. Oavsett om du behöver mat till en mindre sammankomst eller en större tillställning vill vi göra beställningen så smidig som möjligt. Besök vår webbshop och upptäck vårt utbud. Beställ online med möjlighet till avhämtning eller leverans.',
    meta: 'Beställ catering i Nacka från Amore Catering. Italienska bufféer, smörgåstårtor, sallader, wraps och festmat för alla tillfällen.',
    highlights: [
      'Italienska bufféer för vardag och fest',
      'Smörgåstårtor, wraps och sallader',
      'Företagsluncher och specialanpassade rätter',
    ],
  },
  {
    id: 'ostermalm',
    name: 'Östermalm',
    underHeader:
      'God catering på Östermalm för fest, företag och speciella tillfällen',
    slug: 'ostermalm',
    description:
      'När maten spelar en viktig roll för tillställningen vill du kunna lita på ett varierat och smakrikt utbud. Amore Catering erbjuder catering på Östermalm för både privatpersoner och företag.',
    underDescription:
      'Upptäck våra italienskt inspirerade maträtter och bufféer som passar perfekt för middagar, festligheter och företagsevenemang. Vi erbjuder även smörgåstårtor, wraps, sallader och desserter för dig som vill bjuda på något gott och uppskattat. Planerar du en födelsedag eller ett annat speciellt firande? Välj bland våra vanliga tårtor och glasstårtor. För företag erbjuder vi lunchcatering, och för gäster med särskilda kostönskemål finns möjlighet att beställa anpassade vegetariska och veganska maträtter. Beställ enkelt via vår webbshop och välj mellan avhämtning och leverans.',
    meta: 'Catering på Östermalm från Amore Catering. Italiensk buffé, smörgåstårtor, lunchcatering, sallader och desserter. Beställ online!',
    highlights: [
      'Italienskt inspirerade maträtter och bufféer',
      'Smörgåstårtor, wraps och sallader',
      'Lunchcatering samt vegetariska och veganska alternativ',
    ],
  },
  {
    id: 'skarholmen',
    name: 'Skärholmen',
    underHeader: 'Behöver du catering i Skärholmen? Upptäck Amore Catering!',
    slug: 'skarholmen',
    description:
      'Ska du ordna en fest, ett kalas, en familjesammankomst eller kanske bjuda kollegorna på en god lunch? Med Amore Catering blir det enklare att bjuda på mat som passar tillfället.',
    underDescription:
      'Vi erbjuder italiensk mat och bufféer med härliga smaker samt ett brett urval av andra cateringalternativ. Hos oss kan du beställa smörgåstårtor, wraps, sallader och goda desserter. Vi har även vanliga tårtor och glasstårtor för dig som vill avsluta måltiden med något riktigt gott. Vi erbjuder också lunchcatering för företag och kan anpassa maträtter efter önskemål för både vegetarianer och veganer. Oavsett vad du planerar hjälper vi dig att hitta god mat till dina gäster. Besök Amore Caterings webbshop, välj det som passar dig och beställ enkelt online. Du kan hämta maten själv eller välja leverans.',
    meta: 'Catering i Skärholmen med italiensk mat, bufféer, smörgåstårtor, wraps och tårtor. Upptäck Amore Catering och beställ online!',
    highlights: [
      'Italiensk mat och bufféer',
      'Smörgåstårtor, wraps och sallader',
      'Lunchcatering, tårtor och anpassade veganska rätter',
    ],
  },
  {
    id: 'bromma',
    name: 'Bromma',
    underHeader:
      'Amore Catering, smakrik catering i Bromma för alla tillfällen',
    slug: 'bromma',
    description:
      'God mat gör varje tillställning lite trevligare. Om du söker catering i Bromma för en fest, familjemiddag, födelsedag eller ett företagsevent är Amore Catering ett alternativ att upptäcka.',
    underDescription:
      'Vi erbjuder italiensk mat och bufféer för dig som vill bjuda på en god och varierad måltid. I vårt utbud finns även smörgåstårtor, wraps och fräscha sallader som passar både luncher och festliga sammankomster. Vill du bjuda på något sött efter maten? Vi erbjuder både vanliga tårtor, glasstårtor och andra goda desserter. För företag finns lunchcatering, och vi erbjuder även anpassade maträtter för veganer och vegetarianer. Vi vill göra det enkelt att beställa god mat. Därför kan du handla direkt i vår webbshop och välja mellan avhämtning och leverans.',
    meta: 'Söker du catering i Bromma? Amore Catering erbjuder italienska bufféer, smörgåstårtor, luncher, sallader och desserter. Beställ online!',
    highlights: [
      'Italienska bufféer och maträtter',
      'Smörgåstårtor, wraps och sallader',
      'Lunchcatering samt veganska och vegetariska rätter',
    ],
  },
  {
    id: 'solna',
    name: 'Solna',
    underHeader: 'Catering i Solna för företag, fester och goda stunder',
    slug: 'solna',
    description:
      'Behöver du ordna mat till en företagslunch, konferens, födelsedag eller privat fest i Solna? Amore Catering erbjuder ett varierat utbud av catering som gör det enklare att bjuda på god mat.',
    underDescription:
      'För dig som uppskattar italienska smaker erbjuder vi italiensk mat och bufféer som passar många olika tillfällen. Du kan också välja bland våra smörgåstårtor, wraps och sallader när du vill bjuda på något gott till lunch eller möte. Vi har även vanliga tårtor, glasstårtor och desserter för festligare tillfällen. För företag erbjuder vi lunchcatering, och vi kan även hjälpa till med specialanpassade maträtter för vegetarianer och veganer. Med vår webbshop kan du enkelt se utbudet och lägga din beställning när det passar dig. Välj avhämtning eller leverans.',
    meta: 'Företagscatering och festcatering i Solna från Amore Catering. Beställ italiensk buffé, lunch, smörgåstårta och mycket mer online!',
    highlights: [
      'Italiensk mat och bufféer',
      'Smörgåstårtor, wraps och sallader',
      'Lunchcatering, tårtor och anpassade veganska rätter',
    ],
  },
  {
    id: 'stockholm',
    name: 'Stockholm',
    underHeader:
      'Amore Catering, din catering för goda matupplevelser i Stockholm',
    slug: 'stockholm',
    description:
      'Letar du efter catering i Stockholm för en fest, ett bröllop, en födelsedag, en familjesammankomst eller ett företagsevent? Amore Catering erbjuder ett brett sortiment av god mat för både privatpersoner och företag.',
    underDescription:
      'Vi har ett särskilt utbud av italiensk mat och bufféer för dig som uppskattar goda smaker och vill bjuda dina gäster på något extra. Hos oss hittar du också smörgåstårtor, wraps, sallader och ett urval av läckra desserter. Ska du fira något speciellt? Välj bland våra vanliga tårtor och glasstårtor. Vi erbjuder även lunchcatering för företag och maträtter som kan anpassas för vegetarianer och veganer. Oavsett om du planerar en mindre lunch eller en större fest vill vi göra det enkelt för dig att beställa. Handla direkt i vår webbshop och välj mellan avhämtning och leverans. Har du frågor eller önskar en specialanpassad beställning? Kontakta oss gärna!',
    meta: 'Amore Catering erbjuder catering i Stockholm med italiensk mat, bufféer, smörgåstårtor, företagsluncher, tårtor och desserter. Beställ online!',
    highlights: [
      'Italiensk mat och bufféer',
      'Smörgåstårtor, wraps och sallader',
      'Företagsluncher, tårtor och anpassade veganska rätter',
    ],
  },
];
