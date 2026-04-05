'use client';

import { sendFormEmail } from '@/app/actions/email';
import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'pickup' | ''>(
    '',
  );

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setLoading(true);
    setMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phoneNumber: formData.get('phoneNumber'),
      event: formData.get('event'),
      amountGuests: formData.get('amountGuests'),
      deliveryType: formData.get('deliveryType'),
      deliveryAddress: formData.get('deliveryAddress') || '',
      deliveryTime: formData.get('deliveryTime') || '',
      pickupTime: formData.get('pickupTime') || '',
      message: formData.get('message') || '',
    };

    try {
      const result = await sendFormEmail(data);
      if (result.success) {
        setMessage('Förfrågan skickad! Vi kontaktar dig snart.');
        setStatus('success');
        form.reset();
        setDeliveryType('');
      } else {
        setMessage('Ett fel uppstod. Försök igen senare.');
        setStatus('error');
      }
    } catch (error) {
      setMessage('Ett fel uppstod. Försök igen senare.');
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="kontakt"
      className="bg-background max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-primary">
        Boka Din Catering
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div>
          <p className="mb-6 leading-relaxed text-foreground-secondary text-sm md:text-base">
            Kontakta oss idag för att diskutera din event. Vi svarar snabbt och
            hjälper dig planera en perfekt meny som passa era behov och budget.
          </p>
          <div className="space-y-4 text-sm md:text-base [&_h3]:text-primary [&_p]:text-foreground/80">
            <section>
              <h3 className="font-semibold mb-1">Telefon</h3>
              <p>
                <a
                  href="tel:08 30 42 70"
                  className="hover:text-accent-hover transition"
                >
                  08 30 42 70
                </a>
              </p>
            </section>
            <section>
              <h3 className="font-semibold mb-1">Plats</h3>
              <p>Stockholm, Sverige</p>
            </section>
            <section>
              <h3 className="font-semibold mb-1">Info</h3>
              <p>
                Ifall du vill beställa direkt är du välkommen att använda vår{' '}
                <Link
                  href="https://order.foodtec.se/gamore-catering/bestall-mat"
                  className="text-primary underline"
                  target="blank_"
                  rel="noopener noreferrer"
                >
                  Webbshop
                </Link>
              </p>
            </section>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="border border-border rounded-lg p-4 md:p-8 bg-secondary [&_input]:border-border [&_select]:border-border [&_textarea]:border-border [&_input]:w-full [&_input]:rounded [&_input]:px-4 [&_input]:py-2 [&_input]:bg-background [&_input]:text-foreground [&_input]:border [&_input]:focus:outline-none [&_input]:focus:border-primary [&_input]:text-sm"
        >
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block font-medium mb-2 text-accent-muted text-sm md:text-base"
              >
                Namn
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Ditt namn"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block font-medium mb-2 text-accent-muted text-sm md:text-base"
              >
                E-post
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="din@email.se"
              />
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block font-medium mb-2 text-accent-muted text-sm md:text-base"
              >
                Telefonnummer
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                required
                placeholder="07....."
              />
            </div>
            <div>
              <label
                htmlFor="event"
                className="block font-medium mb-2 text-accent-muted text-sm md:text-base"
              >
                Typ av Event
              </label>
              <select
                id="event"
                name="event"
                required
                className="w-full rounded px-4 py-2 bg-background text-foreground border focus:outline-none focus:border-accent text-sm"
              >
                <option>Välj typ av event</option>
                <option>Företagsevenemang</option>
                <option>Bröllop</option>
                <option>Privat fest</option>
                <option>Konferens</option>
                <option>Annat</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="amountGuests"
                className="block font-medium mb-2 text-accent-muted text-sm md:text-base"
              >
                Antal gäster
              </label>
              <input
                id="amountGuests"
                name="amountGuests"
                type="number"
                required
                placeholder="Cirka antal"
              />
            </div>

            <div>
              <label
                htmlFor="deliveryType"
                className="block font-medium mb-2 text-accent-muted text-sm md:text-base"
              >
                Leverans eller Upphämtning
              </label>
              <select
                id="deliveryType"
                name="deliveryType"
                required
                value={deliveryType}
                onChange={(e) =>
                  setDeliveryType(e.target.value as 'delivery' | 'pickup')
                }
                className="w-full rounded px-4 py-2 bg-background text-foreground border focus:outline-none focus:border-accent text-sm"
              >
                <option value="">Välj alternativ</option>
                <option value="delivery">Leverans</option>
                <option value="pickup">Upphämtning</option>
              </select>
            </div>

            {deliveryType === 'delivery' && (
              <>
                <div>
                  <label
                    htmlFor="deliveryAddress"
                    className="block font-medium mb-2 text-accent-muted text-sm md:text-base"
                  >
                    Leveransadress
                  </label>
                  <input
                    id="deliveryAddress"
                    name="deliveryAddress"
                    type="text"
                    required={deliveryType === 'delivery'}
                    placeholder="Gata, nummer, stad"
                  />
                </div>
                <div>
                  <label
                    htmlFor="deliveryTime"
                    className="block font-medium mb-2 text-accent-muted text-sm md:text-base"
                  >
                    Önskad leveranstid
                  </label>
                  <input
                    id="deliveryTime"
                    name="deliveryTime"
                    type="datetime-local"
                    required={deliveryType === 'delivery'}
                  />
                </div>
              </>
            )}

            {deliveryType === 'pickup' && (
              <>
                <div className="bg-background p-4 rounded border border-border">
                  <p className="text-sm md:text-base text-foreground font-medium mb-2">
                    Upphämtningsadress:
                  </p>
                  <p className="text-sm md:text-base text-foreground/80">
                    Högalidsgatan 13B, 117 30 Stockholm
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="pickupTime"
                    className="block font-medium mb-2 text-accent-muted text-sm md:text-base"
                  >
                    Önskad upphämtningstid
                  </label>
                  <input
                    id="pickupTime"
                    name="pickupTime"
                    type="datetime-local"
                    required={deliveryType === 'pickup'}
                  />
                </div>
              </>
            )}

            <div>
              <label
                htmlFor="message"
                className="block font-medium mb-2 text-accent-muted text-sm md:text-base"
              >
                Meddelande
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded px-4 py-2 bg-background text-foreground border focus:outline-none focus:border-accent text-sm"
                placeholder="Berätta om din event/särskilda önskemål..."
              />
            </div>
            {message && (
              <div
                className={`p-3 rounded text-sm text-center ${
                  status === 'success'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {message}
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 md:py-3 rounded font-medium bg-primary text-background hover:bg-accent-hover transition text-sm md:text-base disabled:opacity-50 cursor-pointer"
            >
              {loading ? 'Skickar...' : 'Skicka Förfrågan'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
