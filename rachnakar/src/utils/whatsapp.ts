export function buildWhatsAppUrl(productName?: string): string {
  const phone = "919284400646";
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const message = productName
    ? `Hello Rachnakar Design Studio,

I would like quotation for:

Product:
${productName}

Page:
${pageUrl}

Please contact me.`
    : `Hello Rachnakar Design Studio,

I would like to get a quote for your services.

Please contact me.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
