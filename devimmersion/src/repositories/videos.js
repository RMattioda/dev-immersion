import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

async function create(obj) {
  const respostaDoServer = await fetch(URL_VIDEOS, {
    method: 'POST',
    headers: {
      'Content-type': 'Application/json',
    },
    body: JSON.stringify(obj),
  });
  if (respostaDoServer.ok) {
    const resposta = await respostaDoServer.json();
    return resposta;
  }
  throw new Error('Não foi possível cadastrar os dados');
}

export default {
  create,
};
