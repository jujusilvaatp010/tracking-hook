// api/send-tracking.js
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*'); // ou seu domínio específico
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const data = req.body;
    console.log('[Tracking Hook] Recebido:', data);

    // Envia pro Zapier (substitua pelo seu webhook)
    await fetch('https://hooks.zapier.com/hooks/catch/23891169/uun8xxq/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Erro no proxy:', error);
    res.status(500).json({ error: 'Erro ao enviar para o Zapier' });
  }
}
