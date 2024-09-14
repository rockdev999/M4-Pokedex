# M4-Pokedex

Proyecto Pokedex

A partir del siguiente archivo: https://storage.googleapis.com/campus-cvs/00000000000-images-lectures/pokemons.json
Crea un pokédex, es decir una página web donde puedas consultar pokemones, y leer información sobre cada pokemon que se muestre.
La página web debe:
Mostrar una lista en tarjetas de todos los pokemones en el json. Las tarjetas deben mostrar el nombre y tipo de cada Pokémon (tipo agua, tipo fuego, tipo venenoso, etc.)
Permitir que, al hacer click sobre la tarjeta de un pokemon, se despliegue más información, como el peso, sus movimientos (ataques), etc. De preferencia empleando un modal.
El sitio web debe tener un buscador de pokemones, donde puedas filtrar pokemones por nombre.
Cosas a tener en cuenta:
Diseño libre (Bootstrap, materialize, o tu propio css)
Uso de clases e instancias.
EcmaScript 6
Repo en Github (Github pages es un plus)

BUCAR POKEMON por nombre

MUESTRE POKEMON EN LA CARD

MODAL MAS DETALLE

{
"abilities": [
"Overgrow"
],
"detailPageURL": "/us/pokedex/ivysaur",
"weight": 28.7,
"weakness": [
"Fire",
"Psychic",
"Flying",
"Ice"
],
"number": "002",
"height": 39,
"collectibles_slug": "ivysaur",
"featured": "true",
"slug": "ivysaur",
"name": "Ivysaur",
"ThumbnailAltText": "Ivysaur",
"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png",
"id": 2,
"type": [
"grass",
"poison"
]
}

---

MOSTRAR TODAS LAS CARDS Y APRETAR EN UNA Y MOSTRAR INFORMACION con el find() mediante id
