import { envioEmail } from "../contato.js"; // caminho relativo para o helper

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ erro: "Método não permitido" });
    }

    const { nome, email, mensagem } = req.body;

    try {
        await envioEmail({ nome, email, mensagem });
        res.status(200).json({ sucesso: "Mensagem enviada com sucesso!" });
    } catch (error) {
        console.error(error);
        res.status(400).json({ erro: error.message });
    }
}
