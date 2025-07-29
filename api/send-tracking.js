export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const zapierURL = "https://hooks.zapier.com/hooks/catch/23891169/uun8xxq/";

  try {
    const response = await fetch(zapierURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body)
    });

    return res.status(response.status).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: "Erro ao enviar para Zapier" });
  }
}
