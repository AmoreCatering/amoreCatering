import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col gap-8 pt-8 items-center bg-foreground/90 *:text-background [&_h2]:font-light [&_h2]:text-xl [&_h2]:uppercase [&_h2]:text-background/80 relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 right-0 w-full"
        style={{
          height: '12px',
          fill: 'white',
          transform: 'scaleY(-1)',
        }}
      >
        <defs>
          <pattern
            id="spike-pattern-footer"
            x="0"
            y="0"
            width="11"
            height="12"
            patternUnits="userSpaceOnUse"
          >
            <path d="M0 12L5.5 1l5.5 11z" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#spike-pattern-footer)" />
      </svg>
      <section className="flex flex-col items-center gap-2 text-center">
        <h2>CATERING I STOCKHOLM</h2>
        <p className="md:w-[60%] w-[90%] text-sm">
          Amore Catering, Premium catering tjänster i Stockholm. Hemlagad mat
          med gourmet känsla för alla tillfällen.
        </p>
      </section>
      <section className="flex flex-col gap-2 items-center">
        <h2>KONTAKTA OSS</h2>
        <address className="*:not-italic text-center flex flex-col gap-1.5 *:hover:text-amber-light *:ease-in-out *:transition *:cursor-pointer *:w-fit *:mx-auto">
          <a
            className="address"
            href="https://www.google.com/maps/place/H%C3%B6galidsgatan+13B,+117+30+Stockholm/@59.3179318,18.030397,555m/data=!3m2!1e3!4b1!4m6!3m5!1s0x465f77c516626cd1:0xb5c0102197626147!8m2!3d59.3179291!4d18.0329719!16s%2Fg%2F11csj91byp?entry=ttu&g_ep=EgoyMDI2MDMxMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            Högalidsgatan 13B, 117 30 Stockholm
          </a>
          <a className="phone" href="tel:+08304270">
            08 30 42 70
          </a>
        </address>
      </section>
      <section>
        <Link
          href="/integritetspolicy"
          className="text-background/80 hover:text-background transition-colors ease-in-out text-sm uppercase"
        >
          Integritetspolicy
        </Link>
      </section>
      <section>
        <p className="uppercase text-background/80 pb-8 text-sm text-center">
          Copyright &copy; {new Date().getFullYear()} Amore Catering. Alla
          rättigheter förbehållna.
        </p>
      </section>
    </footer>
  );
}
