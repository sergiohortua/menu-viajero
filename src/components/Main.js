// @flow
import * as React from "react";
import Item from "./Item";
import Grid from "@mui/material/Grid";

const data = [
  {
    title: "Köstritzer Schwarzbier",
    image:
      "https://brandnooz-production.s3.eu-central-1.amazonaws.com/uploads/product/product_image/8361/small_bradnooz_k%C3%B6stritzer_400x400_Kopie.png",
    description:
      "Proveniente de Alemania. En Alemania es la cerveza negra más popular. De carácter ligero y alegre, con notas a chocolate y caramelo. Además compuesta por cebada de malta especialmente refinada que es el ingrediente clave. El resultado es una cerveza negra de fermentación baja que impresiona por su aroma a malta único y su sabor particularmente refrescante.",
    price: "$ 15.000",
  },
  {
    title: "Hofbräu Münchner Weisse",
    image: "https://img.saveur-biere.com/img/p/32389-46828.jpg",
    description:
      "Proviene de Alemania. De alta fermentación de trigo, que a simple vista tiene el aspecto típico turbio. Su olor es afrutado, con recuerdos a clavo y plátano. En el paladar su carbonatación hace que sea diferente a las demás weizenbier ya que le da un toque más chispeante y refrescante dentro de las tonalidades dulces habituales.",
    price: "$ 20.000",
  },
  {
    title: "Erdinger Dunkel",
    image:
      "https://beerboxrd.com/wp-content/uploads/2020/10/erdinger-dunkel-can-copy.png",
    description:
      "Proveniente de Alemania. De trigo oscura con aroma especiado. Su gran sabor se debe al lúpulo y a las maltas tostadas que se utilizan durante su elaboración. Sabor picante pero en general suave. Color marrón oscuro, espuma alta y blanca al servirse.",
    price: "$ 15.000",
  },
  {
    title: "Erdinger Weissbier",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYqEyhV7lrJP8yyfd2WXQlZdRbG6AHqmulbg&usqp=CAU",
    description:
      "Proveniente de Alemania. El clásico indiscutible en la gama de productos Erdinger, también es, sencillamente la cerveza de trigo por excelencia. Se elabora utilizando la levadura según una receta tradicional y, por supuesto, en estricta conformidad con la ley de pureza bávara de 1516. Incluso hoy en día, sigue siendo fermentada en botella en la forma tradicional; se tarda de tres a cuatro semanas para que madure.",
    price: "$ 20.000",
  },
  {
    title: "Benediktiner Weissbier ",
    image:
      "https://s.cornershopapp.com/product-images/2028548.png?versionId=THtwCIMhsrbtTgkAU2MDbefR_AcwIIBy",
    description:
      "Proveniente de Alemania. Nombre monástica para una cerveza de apariencia dorada y de trigo con muchísima espuma blanca y esponjosa. Una espuma alta al servir en copa que se disipa lentamente hasta quedar una capa de tamaño medio. Con notas frutales donde se destaca el banano. En boca una cerveza ligera, fácil de beber perfecta para refrescar.",
    price: "$ 15.000",
  },
  {
    title: "Weidmann Super Strong",
    image: "https://lalicorera.com/img/products/Weidmann-super-strong.png",
    description:
      "Proveniente de Alemania. Estilo Lager Strong. Se produce de acuerdo a la Ley de Pureza Alemana, lo que significa que solo cuatro de las materias primas naturales se han utilizado; agua, cebada, malta y lúpulo.",
    price: "$ 15.000",
  },
  {
    title: "Bitburger Premium",
    image:
      "https://cdn.shopify.com/s/files/1/2788/1238/products/1_BITBURGER-PREMIUM-330ML_1200x1200.jpg?v=1626946255",
    description:
      "Proveniente de Alemania. De color dorado intenso, bien límpida y con espuma blanca y esponjosa pero que se disipa rápidamente. Sus burbujas son gruesas; cerveza refrescante por lo cual debe beberse muy fría.",
    price: "$ 15.000",
  },
  {
    title: "Erdinger Pikantus ",
    image: "https://lalicorera.com/img/products/erdinger-pikantus.png",
    description:
      "Proveniente de Alemania. Fabricada conforme a la ley de pureza alemana de 1516. Debe su sabor fuerte y completo a la utilización de trigo oscuro seleccionado, maltas de cebada y un proceso significativamente más largo de maduración. Cerveza con poca espuma, de apariencia o color blanco mate que se disipa rápidamente en su totalidad después de servida en vaso.",
    price: "$ 20.000",
  },

  {
    title: "Erdinger AlkoholFrei ",
    image:
      "https://cdn.shopify.com/s/files/1/2140/3211/products/ErdingerAlkoholfrei_425x.png?v=1613511695",
    description:
      "Proveniente de Alemania, de sabor completo y muy baja en alcohol. A las personas que no les guste renunciar a una buena cerveza, se le aconseja beber esta referencia; equilibrada que nunca pierde la esencia misma de la bebida. Elaborada con el esmero habitual y la experiencia de aproximadamente 110 años de tradición y bajo las exigencias de calidad más altas del país bávaro.",
    price: "$ 20.000",
  },
  {
    title: "Paulaner Naturtrüb",
    image:
      "https://www.paulaner.de/content/7-de/1-produkte/1-weissbiere/1-hefe-weissbier-naturtrueb/modules/1-product_intro-1rbvw8m/gebinde-nat-05-flasche-hwbn.png",
    description:
      "Proveniente de Alemania. Cerveza rubia de trigo con alta fermentación tipo Ale producida con materia prima de alta calidad. Además de maltas especiales, trigo y cebada.",
    price: "$ 15.000",
  },
  {
    title: "Köstritzer Pale Ale",
    image:
      "http://bitburger-bierhaus-bitburg.de/wp-content/uploads/2019/10/57624_Koest_PaleAle_05l_Flasche_betaut_4C_Ohne-1-360x930.png",
    description:
      "Proveniente de Alemania. Despliega una verdadera sinfonía de los sentidos. En su tradición y origen respira tanto el espíritu de la historia como el de la más alta perfección artesanal. La impresión óptica del color miel naranja-dorado con una espuma fina y ligera es seguida por un espectro multifacético e intensamente picante en la fragancia. Esta va desde la fruta de la pasión hasta la flor de azahar y el pomelo hasta los lúpulos más finos. Finalmente, en la bebida, la promesa se mantiene cuando la dulzura de la malta y los matices refrescantes de frutas tropicales se combinan con una nota de lúpulo característicamente plena e intensa; cuya determinación y vitalidad le da a la Pale Ale una tensión y profundidad de sabor sin precedentes.",
    price: "$ 18.000",
  },
  {
    title: "Steam Brew Imperial IPA",
    image:
      "https://beerkings.cl/wp-content/uploads/2021/06/steamimperialunidad.png",
    description:
      "Proveniente de Alemania. Es elaborada con triple lúpulo y levadura Ale de fermentación alta, así como con maltas hechas con mucho tesón que aportan un color rojizo y un aroma intenso, la India Pale Ale «del Jovenzuelo» destaca sobre todo por el uso de las variedades de lúpulo Yellow Sub y Mosaic, que se complementan por sus aromas cítricos y florales.",
    price: "$ 15.000",
  },

  {
    title: "Steam Brew Imperial Stout",
    image:
      "https://beerkings.cl/wp-content/uploads/2021/06/steamstoutunidad.png",
    description:
      "Proveniente de Alemania. Con combinación de aromas de fermentación provenientes de levaduras puras y de malta tostada cuidadosamente seleccionadas. Esto da lugar a un sabor a malta acaramelado y tostado. Gracias a su color negro intenso y a la cremosa espuma que forma, la Imperial Stout «del maestro» es la reina de las especialidades.",
    price: "$ 15.000",
  },
  {
    title: "Steam Brew Wheat Ale",
    image:
      "https://cdn.shopify.com/s/files/1/0462/8771/6506/products/steamweizenunidadWheat_1da42b79-d81f-4762-9f61-900268ee935e_grande.png?v=1616694512",
    description:
      "Cerveza Importada Steam Brew Wheat Pale Ale. Su IPA de trigo, con levadura de ésteres afrutados, intenso sabor a malta y triple lúpulo, además de unas notas cítricas y exóticas muy equilibradas que provienen de las variedades de lúpulo Citra y Hallertauer Blanc, vale todos los riesgos que corre «el Agricultor». Notas a miel y caramelo procedentes de las maltas Weizen, Pilsner y Münchner. Citra: notas cítricas (lima y pomelo) y aromas exóticos (frutas tropicales y mango). Hallertauer Blanc: buqué de vino blanco afrutado y floral con aromas de maracuyá, grosella espinosa y piña.",
    price: "$ 15.000",
  },
  {
    title: "Schöfferhofer Hefeweizen",
    image:
      "https://chelar.com.mx/wp-content/uploads/2019/12/schofferhofer-hefeweizen-naturtrub.png",
    description:
      "Proveniente de Alemania. De tono naranja similar al ámbar, espuma blanca, cremosa y alta al servirse. Aromas que destacan el trigo con matices de frutas donde predomina el plátano y la manzana, acompañado de otras notas cítricas, con cáscaras de limón y naranjas. De cuerpo medio, suave en el paladar, afrutada y dulzona con matiz ácido, algo que prevalece por encima del amargor que es notablemente discreto.",
    price: "$ 20.000",
  },
];

type Props = {};
const Row = (props) => {
  return (
    <Grid item xs sm={4}>
      <Item data1={data} />
    </Grid>
  );
};
const Main = (props: Props) => {
  const {} = props;
  return (
    <div>
      <Row data={data} />
    </div>
  );
};
export default Main;
