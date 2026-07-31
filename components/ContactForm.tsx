'use client';

import { useMemo, useState } from 'react';
import { instagram, services } from '../app/content';

export function ContactForm() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [interest, setInterest] = useState('');
  const [message, setMessage] = useState('');

  const whatsappHref = useMemo(() => {
    const text = [
      'Hello CSS Cruise, I would like to ask about enrollment.',
      name ? `Name: ${name}` : '',
      contact ? `Contact: ${contact}` : '',
      interest ? `Interest: ${interest}` : '',
      message ? `Message: ${message}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    return `${instagram.whatsappMessage}?text=${encodeURIComponent(text)}`;
  }, [contact, interest, message, name]);

  return (
    <form className="contact-form">
      <label>
        Name
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Email or WhatsApp
        <input
          type="text"
          name="contact"
          placeholder="How CSS Cruise can reach you"
          value={contact}
          onChange={(event) => setContact(event.target.value)}
        />
      </label>
      <label>
        Interest
        <select
          name="interest"
          value={interest}
          onChange={(event) => setInterest(event.target.value)}
        >
          <option value="" disabled>
            Select an option
          </option>
          {services.map((service) => (
            <option value={service.title} key={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </label>
      <label>
        Message
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us what you need help with"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>
      <a href={whatsappHref} target="_blank" rel="noreferrer" className="primary-button">
        Prepare WhatsApp message
      </a>
    </form>
  );
}
