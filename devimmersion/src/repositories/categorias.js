import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

async function getAll() {
  const respostaDoServer = await fetch(URL_CATEGORIES);
  if (respostaDoServer.ok) {
    const resposta = await respostaDoServer.json();
    return resposta;
  }
  throw new Error('Não foi possível pegar os dados');
}

async function getAllWithVideos() {
  const respostaDoServer = await fetch(`${URL_CATEGORIES}?_embed=videos`);
  if (respostaDoServer.ok) {
    const resposta = await respostaDoServer.json();
    return resposta;
  }
  throw new Error('Não foi possível pegar os dados');
}

export default {
  getAllWithVideos,
  getAll,
};
