# Iconic Car care

Premium Next.js website for Iconic Car care, a luxury automotive detailing and protection studio in Vadodara, Gujarat.

## Stack

- Next.js App Router
- Tailwind CSS
- Framer Motion
- Lucide React icons
- SEO metadata, sitemap, robots, and JSON-LD schema

## Pages

- Home
- About Us
- Services
- Gallery
- Packages
- Testimonials
- Contact

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment

Create `.env.local` from `.env.example` and replace the placeholder phone values before deploying.

```bash
NEXT_PUBLIC_SITE_URL=https://iconiccarcare.com
NEXT_PUBLIC_WHATSAPP_NUMBER=9199044 84312
NEXT_PUBLIC_PHONE_DISPLAY=+91 99044 84312
```

## Notes

- Gallery imagery uses optimized remote images from Unsplash through `next/image`.
- The booking form opens WhatsApp with the submitted appointment details.
- Google Maps uses a no-key embed query for Iconic Car care, Vadodara, Gujarat.
