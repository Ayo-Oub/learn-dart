export default {
  id: 8,
  slug: 'dictionnaires',
  title: 'Les Dictionnaires (Map)',
  summary:
    "Associer des clés à des valeurs avec Map, et apprendre à les créer, modifier et parcourir.",
  duration: '18 min',

  objectives: [
    "Comprendre à quoi sert une Map (paires clé/valeur)",
    'Créer une Map et déclarer son type avec Map<TypeClé, TypeValeur>',
    "Lire, ajouter et modifier une valeur à partir de sa clé",
    'Vérifier la présence d\u2019une clé et retirer une entrée',
    'Parcourir une Map avec keys, values et entries',
  ],

  sections: [
    {
      id: 'quest-ce-quune-map',
      heading: "Qu'est-ce qu'une Map ?",
      content: `Une **Map** (dictionnaire) associe chaque **clé** à une **valeur** — un
peu comme un vrai dictionnaire associe un mot à sa définition. Contrairement
à une liste où on accède par un index numérique (\`0\`, \`1\`, \`2\`...), dans
une Map on accède directement par la clé de son choix.

Chaque clé n'apparaît **qu'une seule fois** dans la Map (comme dans un Set).`,
      code: `Map<String, int> ages = {
  'Ayoub': 25,
  'Sara': 22,
  'Karim': 30,
};

print(ages);   // {Ayoub: 25, Sara: 22, Karim: 30}`,
    },
    {
      id: 'creer-une-map',
      heading: 'Créer une Map',
      content: `On déclare une Map avec \`Map<TypeClé, TypeValeur>\`. Les paires
clé/valeur s'écrivent entre accolades, séparées par des deux-points
\`clé: valeur\`.

Pour une Map vide, \`{}\` fonctionne directement (contrairement au Set, où
il fallait préciser le type pour éviter l'ambiguïté).`,
      code: `Map<String, String> capitales = {
  'Maroc': 'Rabat',
  'France': 'Paris',
};

Map<String, int> scores = {};   // Map vide`,
    },
    {
      id: 'lire-ajouter-modifier',
      heading: 'Lire, ajouter et modifier une valeur',
      content: `On accède à une valeur avec des crochets \`[clé]\`, exactement comme pour
une liste, mais avec une clé au lieu d'un index. La même syntaxe sert aussi
à **ajouter** une nouvelle paire ou à **modifier** une valeur existante : si
la clé existe déjà, sa valeur est remplacée ; sinon, une nouvelle paire est
créée.`,
      code: `Map<String, int> ages = {'Ayoub': 25, 'Sara': 22};

print(ages['Ayoub']);      // 25

ages['Ayoub'] = 26;         // modifie une valeur existante
ages['Karim'] = 30;         // ajoute une nouvelle paire

print(ages);   // {Ayoub: 26, Sara: 22, Karim: 30}

print(ages['Inconnu']);     // null : la clé n'existe pas`,
    },
    {
      id: 'verifier-retirer',
      heading: 'Vérifier une clé et retirer une entrée',
      content: `Avant de lire une valeur, il est prudent de vérifier que sa clé existe
avec \`.containsKey()\`, pour éviter de récupérer \`null\`. \`.remove(clé)\`
retire complètement une paire clé/valeur de la Map.`,
      code: `Map<String, int> ages = {'Ayoub': 25, 'Sara': 22};

print(ages.containsKey('Ayoub'));    // true
print(ages.containsKey('Karim'));    // false

ages.remove('Sara');
print(ages);   // {Ayoub: 25}`,
    },
    {
      id: 'parcourir-une-map',
      heading: 'Parcourir une Map',
      content: `Une Map se parcourt de plusieurs façons selon ce dont on a besoin :

- \`.keys\` : toutes les clés (un Iterable).
- \`.values\` : toutes les valeurs (un Iterable).
- \`.forEach((clé, valeur) => ...)\` : exécute une action sur chaque paire.
- \`for (var entree in map.entries)\` : accède à chaque paire avec
  \`entree.key\` et \`entree.value\`.`,
      code: `Map<String, int> ages = {'Ayoub': 25, 'Sara': 22, 'Karim': 30};

print(ages.keys);      // (Ayoub, Sara, Karim)
print(ages.values);    // (25, 22, 30)

ages.forEach((nom, age) {
  print('$nom a $age ans');
});

for (var entree in ages.entries) {
  print('\${entree.key} -> \${entree.value}');
}`,
    },
  ],

  codeExample: `void main() {
  Map<String, int> stock = {
    'pommes': 10,
    'bananes': 5,
  };

  stock['oranges'] = 8;
  stock['pommes'] = stock['pommes']! - 3;

  stock.forEach((fruit, quantite) {
    print('$fruit : $quantite');
  });
}`,

  keyPoints: [
    "Une Map associe des clés uniques à des valeurs : Map<TypeClé, TypeValeur>.",
    "map[clé] lit ou modifie une valeur ; si la clé n'existe pas, l'affectation la crée.",
    "Lire une clé absente renvoie null ; .containsKey() permet de vérifier avant.",
    ".remove(clé) retire une paire ; .keys, .values et .entries permettent de parcourir la Map.",
  ],

  exercisePreview: {
    prompt:
      "Crée une Map<String, int> associant des prénoms à des âges, puis affiche chaque paire avec forEach sous la forme 'prénom a X ans'.",
    hint: 'map.forEach((cle, valeur) => print(...)); donne accès à la clé et à la valeur en même temps.',
  },

  next: 'iteration-avancee',
}
