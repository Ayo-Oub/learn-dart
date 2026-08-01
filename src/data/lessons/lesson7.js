export default {
  id: 7,
  slug: 'ensembles',
  title: 'Les Ensembles (Set)',
  summary:
    "Stocker des éléments uniques avec Set, et utiliser les opérations d'ensembles : union, intersection, différence.",
  duration: '15 min',

  objectives: [
    "Comprendre la différence entre List et Set",
    "Créer un Set et y ajouter ou retirer des éléments",
    "Vérifier si un élément appartient à un Set",
    "Utiliser les opérations d'ensembles : union, intersection, différence",
    "Convertir une liste en Set (et inversement) pour éliminer les doublons",
  ],

  sections: [
    {
      id: 'quest-ce-quun-set',
      heading: "Qu'est-ce qu'un Set ?",
      content: `Un **Set** est une collection, comme une liste, mais avec deux différences
importantes :

- Un Set ne peut contenir **aucun doublon** : chaque élément n'y apparaît
  qu'une seule fois.
- Un Set **n'a pas d'ordre garanti** : contrairement à une liste, on ne peut
  pas accéder à un élément par un index comme \`set[0]\`.

On l'utilise dès qu'on veut garantir l'unicité des éléments : une liste de
tags, d'identifiants, de villes déjà visitées...`,
      code: `Set<String> couleurs = {'rouge', 'vert', 'bleu'};
Set<int> notes = {12, 15, 12, 9};   // le doublon 12 est ignoré

print(couleurs);   // {rouge, vert, bleu}
print(notes);       // {12, 15, 9}`,
    },
    {
      id: 'creer-un-set',
      heading: 'Créer un Set',
      content: `Un Set se déclare avec \`Set<Type>\`, et ses éléments s'écrivent entre
**accolades** \`{ }\` (attention, ce n'est pas la même syntaxe qu'une liste,
qui utilise des crochets \`[ ]\`).

Pour créer un Set vide, il faut préciser le type, sinon Dart croit qu'il
s'agit d'une Map (qu'on verra plus tard) : \`{}\` seul crée une Map vide,
pas un Set vide.`,
      code: `Set<String> villes = {'Oujda', 'Rabat', 'Fès'};

Set<int> vide = {};        // Set vide, bien typé
// var pieges = {};        // ⚠️ ceci crée une Map vide, pas un Set !`,
    },
    {
      id: 'ajouter-retirer',
      heading: 'Ajouter et retirer des éléments',
      content: `Comme pour une liste, on utilise \`.add()\` pour ajouter un élément et
\`.remove()\` pour en retirer un. Si on essaie d'ajouter une valeur déjà
présente, elle est simplement ignorée : le Set ne change pas.`,
      code: `Set<String> villes = {'Oujda', 'Rabat'};

villes.add('Fès');
print(villes);           // {Oujda, Rabat, Fès}

villes.add('Oujda');     // déjà présent : ignoré
print(villes);           // {Oujda, Rabat, Fès}

villes.remove('Rabat');
print(villes);           // {Oujda, Fès}`,
    },
    {
      id: 'appartenance-et-taille',
      heading: "Vérifier l'appartenance et la taille",
      content: `\`.contains(valeur)\` teste si un élément appartient au Set — c'est même
plus rapide que sur une liste, ce qui rend le Set idéal pour beaucoup de
vérifications d'appartenance. \`.length\` donne le nombre d'éléments, comme
pour une liste.`,
      code: `Set<String> villes = {'Oujda', 'Rabat', 'Fès'};

print(villes.contains('Rabat'));   // true
print(villes.contains('Tanger'));  // false
print(villes.length);               // 3`,
    },
    {
      id: 'operations-densembles',
      heading: "Opérations d'ensembles",
      content: `Le vrai intérêt d'un Set, c'est qu'il permet de faire des opérations
mathématiques d'ensembles directement :

- \`.union(autreSet)\` : tous les éléments des deux Sets, sans doublons.
- \`.intersection(autreSet)\` : uniquement les éléments présents dans **les
  deux** Sets.
- \`.difference(autreSet)\` : les éléments présents dans le premier Set mais
  **pas** dans l'autre.`,
      code: `Set<String> elevesMaths = {'Ayoub', 'Sara', 'Yassine'};
Set<String> elevesInfo = {'Sara', 'Karim'};

print(elevesMaths.union(elevesInfo));
// {Ayoub, Sara, Yassine, Karim}

print(elevesMaths.intersection(elevesInfo));
// {Sara} — inscrit aux deux matières

print(elevesMaths.difference(elevesInfo));
// {Ayoub, Yassine} — maths seulement`,
    },
    {
      id: 'conversion-list-set',
      heading: 'Convertir entre List et Set',
      content: `Une astuce très courante : transformer une liste en Set avec
\`.toSet()\` permet d'**éliminer automatiquement les doublons**. On peut
ensuite reconvertir en liste avec \`.toList()\` si on a besoin de l'ordre ou
de l'accès par index.`,
      code: `List<int> notes = [12, 15, 12, 9, 15, 18];

Set<int> notesUniques = notes.toSet();
print(notesUniques);              // {12, 15, 9, 18}

List<int> listeSansDoublons = notesUniques.toList();
print(listeSansDoublons);         // [12, 15, 9, 18]`,
    },
  ],

  codeExample: `void main() {
  Set<String> fruitsAyoub = {'pomme', 'banane', 'mangue'};
  Set<String> fruitsSara = {'banane', 'orange'};

  print('Union : \${fruitsAyoub.union(fruitsSara)}');
  print('Communs : \${fruitsAyoub.intersection(fruitsSara)}');
  print('Seulement Ayoub : \${fruitsAyoub.difference(fruitsSara)}');
}`,

  keyPoints: [
    "Un Set ne contient aucun doublon et n'a pas d'ordre garanti (pas d'accès par index).",
    "Un Set s'écrit avec des accolades { } ; Set<Type> vide = {}; pour un Set vide bien typé.",
    ".add() ignore silencieusement une valeur déjà présente ; .remove() retire un élément.",
    ".union(), .intersection() et .difference() combinent deux Sets comme en mathématiques.",
    ".toSet() sur une liste élimine les doublons ; .toList() reconvertit un Set en liste.",
  ],

  exercisePreview: {
    prompt:
      "Crée deux Sets de String représentant les langues parlées par deux personnes, puis affiche les langues qu'elles ont en commun avec intersection().",
    hint: 'set1.intersection(set2) renvoie un nouveau Set contenant uniquement les éléments présents dans les deux.',
  },

  next: 'dictionnaires',
}
