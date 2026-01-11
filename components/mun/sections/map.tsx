import { Container } from "@/components/mun/container";

export function Map() {
  return (
    <section className="w-full py-12 md:py-24">
        <Container>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5694607932655!2d85.33695917595412!3d27.699698725827677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19bed7991c27%3A0x67085d1e30b8be32!2sGlobal%20School%20of%20Science!5e0!3m2!1sen!2snp!4v1768135545419!5m2!1sen!2snp"
        width="100%"
        height="450"
        style={{ border: 0, borderRadius: 'var(--radius)' }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="GSSMUN 4.0 Venue Location"
      ></iframe>
      </Container>
    </section>
  );
}
