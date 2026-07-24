import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.amorecatering.se'),
  title: 'Integritetspolicy - Amore Catering',
  description:
    'Läs Amore Caterings integritetspolicy. Vi värnar om dina personuppgifter och följer GDPR.',
  keywords: ['integritetspolicy', 'dataskydd', 'personuppgifter', 'GDPR'],
  openGraph: {
    title: 'Integritetspolicy - Amore Catering',
    description: 'Information om hur vi hanterar dina personuppgifter.',
    url: 'https://www.amorecatering.se/integritetspolicy',
    siteName: 'Amore Catering',
    locale: 'sv_SE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.amorecatering.se/integritetspolicy',
  },
};

function Page() {
  return (
    <section className="py-6 flex flex-col md:[&>section]:w-[70%] [&>section]:w-[90%] [&>section]:flex [&>section]:flex-col [&>section]:gap-6 items-center gap-6 [&_h2]:text-center [&_h1]:text-4xl [&_h1]:font-medium md:[&_h3]:text-2xl [&_h3]:text-xl md:[&_h2]:text-3xl [&_h2]:text-2xl [&_h3]:font-medium [&_h2]:font-medium [&_p]:text-foreground/80 [&_li]:py-2 md:[&_li]:py-0.5">
      <h1 className="tracking-wide">Integritetspolicy</h1>
      <section>
        <section>
          <h3>Personuppgifter</h3>
          <p>
            Vi på <strong>Amore Catering</strong> hanterar vissa personuppgifter
            om våra kunder och besökare på vår hemsida. Denna data samlas in och
            sparas om dig för att tillhandahålla tjänster, ge dig en bättre
            upplevelse samt erbjuda dig tjänster och produkter som passar dina
            behov.
          </p>
        </section>

        <h2>Uppgifter vi samlar in:</h2>

        <section>
          <h3>Cookies & Samtycke</h3>
          <p>
            Vid ditt första besök på vår webbplats presenteras du för en
            cookie-banner där du kan välja mellan &quot;Endast nödvändiga&quot;
            och &quot;Acceptera allt&quot;. Ditt val sparas i din webbläsare och
            respekteras vid framtida besök.
          </p>
          <p className="pt-2">
            <strong>Endast nödvändiga cookies:</strong> Dessa är tekniska
            cookies som är helt nödvändiga för att webbplatsen ska fungera, till
            exempel sessioner och säkerhet. De laddas alltid och kräver inget
            samtycke.
          </p>
          <p className="pt-2">
            <strong>Analytics-cookies:</strong> För att förbättra vår webbplats
            använder vi Vercel Analytics. Dessa laddas ENDAST om du accepterar
            alla cookies via bannern eller om du har gjort ett tidigare val om
            att acceptera. Om du väljer &quot;Endast nödvändiga&quot; kommer
            dessa INTE att laddas.
          </p>
          <p className="pt-2">
            <strong>Ändra ditt val:</strong> Du kan när som helst ändra ditt
            cookie-val genom att kontakta oss via 08 30 42 70 eller genom att
            aktivera &quot;Do Not Track&quot; i din webbläsares
            sekretessinställningar, så respekteras ditt val automatiskt.
          </p>
        </section>

        <section>
          <h3>Kontaktuppgifter</h3>
          <p>
            När du genomför en beställning hos oss samlar vi in dina
            kontaktuppgifter: Namn, e-postadress, telefonnummer, adress.
          </p>
        </section>

        <section>
          <h3>Information om din beställning</h3>
          <p>
            Vi sparar information om de catering-tjänster och menyer du beställt
            för att kunna leverera tjänsterna korrekt och för framtida referens.
          </p>
        </section>

        <section>
          <h3>Support och kommunikation</h3>
          <p>
            Om du kontaktar vår support samlar vi in den information du uppger
            till oss för att kunna erbjuda dig god service och ge dig hjälp.
          </p>
        </section>

        <section>
          <h3>På detta sätt samlar vi in personuppgifter:</h3>
          <ul className="list-['-'] *:px-0.5">
            <li>När du genomför en beställning hos oss</li>
            <li>
              När du kontaktar oss via telefon, e-post eller kontaktformulär
            </li>
            <li>När du besöker vår hemsida (via cookies)</li>
            <li>
              Genom webbanalyser via cookies som samlar in information från din
              webbläsare
            </li>
          </ul>
          <strong className="pt-1.5 px-0.5">
            Beroende på vilken av våra tjänster du använder samlar vi in olika
            typer av information.
          </strong>
        </section>

        <section>
          <h3>Detta använder vi personuppgifter till:</h3>

          <ul className="list-['-'] *:px-0.5">
            <li>
              För att fullgöra avtal med dig såsom genomförda beställningar
              <br />
              (Rättslig grund: Fullgörande av avtal)
            </li>
            <li>
              För att ge dig support och service. Behandlingen ligger då i både
              vårt och ditt intresse.
              <br />
              (Rättslig grund: Intresseavvägning och fullgörande av avtal)
            </li>
            <li>
              För att förbättra vår webbplats och tjänster genom Analytics
              <br />
              (Rättslig grund: Båda parters intresse)
            </li>
          </ul>
        </section>

        <section>
          <h3>Hur lång tid sparar vi personuppgifter:</h3>
          <p>
            Vi sparar uppgifter så länge som det är nödvändigt för att utföra
            våra åtaganden som leverantör, och så länge det krävs enligt
            lagstadgade lagringstider.
          </p>
        </section>
      </section>

      <section>
        <h2>Dessa tjänster lämnar vi ut personuppgifter till:</h2>

        <section>
          <h3>Vercel Analytics</h3>
          <p>
            Vi använder Vercel Analytics för att samla in anonymiserad data om
            hur besökare använder vår webbplats. Denna data hjälper oss att
            förbättra webbplatsens prestanda och användarupplevelse.
          </p>
          <p className="pt-2">
            <strong>Data som samlas in:</strong>
          </p>
          <ul className="list-['-'] *:px-0.5 pt-1">
            <li>Antal sidvisningar och besök</li>
            <li>Sidladdningstider och webbplatsens prestanda</li>
            <li>Användarens geografiska region (på landsnivå)</li>
            <li>Webbläsartyp och enhettyp</li>
            <li>Referrerande webbplats eller sökmotor</li>
          </ul>
          <p className="pt-2">
            <strong>Hur man opt-ut ur Vercel Analytics:</strong>
          </p>
          <ul className="list-['-'] *:px-0.5 pt-1">
            <li>
              <strong>Browser Do Not Track (DNT):</strong> Aktivera &quot;Do Not
              Track&quot; i din webbläsare (finns i sekretessinställningarna)
            </li>
            <li>
              <strong>Ad-blockers/Privacy Extensions:</strong> Använd extensions
              som uBlock Origin, Privacy Badger eller liknande
            </li>
            <li>
              <strong>Kontakta oss:</strong> Ring oss på 08 30 42 70
            </li>
          </ul>
        </section>

        <section>
          <h3>Säkerhet</h3>
          <p>
            Vi använder moderna och sofistikerade säkerhetslösningar för att
            samla in, behandla, lagra och kommunicera personuppgifter på ett
            säkert sätt. Exempelvis via SSL/TLS. Vi uppdaterar vår webbplats med
            jämna mellanrum för att säkerställa integritet, tillgänglighet och
            sekretess.
          </p>
        </section>

        <section>
          <h3>Dina rättigheter</h3>
          <p>
            Du som individ bestämmer själv över dina egna personuppgifter. Du
            avgör själv vilka uppgifter du vill lämna. Du har även rätt att
            kontakta oss om du vill ha ut information om de uppgifter vi har om
            dig, för att begära rättelse, överföring eller för att begära att vi
            begränsar behandlingen, för att göra invändningar eller begära
            radering av dina uppgifter. Vid eventuella klagomål på vår
            behandling av personuppgifter har du som individ även rätt att inge
            klagomål till tillsynsmyndigheten Datainspektionen.
          </p>
          <p className="pt-2">
            Vissa personuppgifter behöver vi för att kunna tillhandahålla våra
            tjänster till dig. Om du vill återkalla samtycke och begär
            ändring/radering av dessa uppgifter kan det därför innebära att vi
            inte kan tillhandahålla alla våra tjänster till dig.
          </p>
        </section>

        <section>
          <h3>Förändringar i denna policy</h3>
          <p>Innehållet i denna policy kan komma att förändras med tiden.</p>
        </section>

        <section>
          <h3>Kontakta oss angående denna policy</h3>
          <p>
            Har du frågor eller synpunkter angående denna policy kan du vända
            dig till oss. Vi är tillgängliga via telefon på 08 30 42 70.
          </p>
        </section>

        <address className="text-center not-italic flex flex-col gap-1 *:font-medium">
          <h3>Kontaktuppgifter</h3>
          <a
            href="https://www.google.com/maps/place/H%C3%B6galidsgatan+13B,+117+30+Stockholm/@59.3179318,18.030397,555m/data=!3m2!1e3!4b1!4m6!3m5!1s0x465f77c516626cd1:0xb5c0102197626147!8m2!3d59.3179291!4d18.0329719!16s%2Fg%2F11csj91byp?entry=ttu&g_ep=EgoyMDI2MDMxMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            Högalidsgatan 13B, 117 30 Stockholm
          </a>

          <a href="tel:+468304270">08 30 42 70</a>
        </address>
      </section>
    </section>
  );
}

export default Page;
