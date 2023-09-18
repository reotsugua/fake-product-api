
# Projeto Listagem de Produtos / Pedido

O objetivo é implementar uma listagem de produtos para pedido no qual será necessário aplicar algumas ténicas para uma boa experiência do usuário.




## Requisitos

- Deverá ter dois temas, Dark e Light. O usuario poderá escoolher qual tema utilizar de forma dinamica.

- Deverá ter uma lista com todos produtos retornados da API contendo em cada item o seguinte contrato:
`image,  nome, preço, categoria e avaliação`

- Ao clicar em um item, deverá abrir um modal com todas informações do produto e um campo editavel para adicionar a quantidade que será solicitada via pedido.
  - Deverá ter opção para navegar entre os produtos através das setas do teclado para direita e esquerda. 
  - Deverá ter botões `adicionar e remover`

- Ao adicionar um item, deverá aparecer um carrinho de compras com um badge com a quantidade de itens adicionados para pedido.
    - Os dados para pedido deverão ser persistidos no navegador do cliente. 

- Deverá ter uma topBar com o campo `pesquisa` onde o usuário fará a pesquisa por um produto da na API
    - Deverá ter um botão `atualizar` que quando acionado, deverá atualizar a lista de produtos.

- Deverá possuir uma sideBar com os seguintes filtros: `categoria, avaliação e preços`






## Design System

https://www.figma.com/file/iJsu1HirhuyuEMvTLIE4xI/Material-UI-v.1-by-Fively-(Copy)?type=design&node-id=0-1&mode=design

https://mui.com/


## Documentação da API

#### Retorna todos os itens

```http
  GET /products
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `pageSize` | `string` | **Opcional**. quantidade de produtos retornados |
| `pageNumber` | `string` | **Opcional**. numero da pagina |




