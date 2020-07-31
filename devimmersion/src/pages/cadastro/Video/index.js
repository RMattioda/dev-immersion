import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import categoriasRepository from '../../../repositories/categorias';
import videosRepository from '../../../repositories/videos';

function CadastroVideo() {
  const [categorias, setCategorias] = useState([]);
  const history = useHistory();
  const titulosDasCategorias = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository.getAll()
      .then((categoriasComVideos) => {
        setCategorias(categoriasComVideos);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Aqui cadastramos vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias.find(
          (categoria) => categoria.titulo === values.categoria,
        );

        videosRepository.create({
          categoriaId: categoriaEscolhida.id,
          titulo: values.titulo,
          url: values.url,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >

        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Url do Vídeo"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={
            titulosDasCategorias
          }
        />

        <Button type="submit">
          Cadastrar
        </Button>

      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
