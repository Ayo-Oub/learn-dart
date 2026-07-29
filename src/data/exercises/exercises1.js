const exercises1 = [
  {
    id: 'ex-1-1',
    lessonSlug: 'introduction',
    title: 'Ton prénom à l\u2019écran',
    difficulty: 'facile',
    statement:
      "Modifie le programme pour qu'il affiche ton prénom au lieu de 'Dart'.",
    starterCode: `void main() {
  print('Bonjour, Dart !');
}`,
    solutionCode: `void main() {
  print('Bonjour, Ayoub !');
}`,
    hint: 'Remplace le texte entre les guillemets simples dans print(...).',
  },
  {
    id: 'ex-1-2',
    lessonSlug: 'introduction',
    title: 'Plusieurs lignes',
    difficulty: 'facile',
    statement:
      "Affiche trois lignes différentes : ton prénom, ton âge, et ta ville — chacune avec un print() séparé.",
    starterCode: `void main() {
  // À compléter
}`,
    solutionCode: `void main() {
  print('Ayoub');
  print('25 ans');
  print('Oujda');
}`,
    hint: 'Chaque print() affiche une seule ligne. Tu peux en appeler plusieurs à la suite.',
  },
  {
    id: 'ex-1-3',
    lessonSlug: 'introduction',
    title: 'Commente ton code',
    difficulty: 'facile',
    statement:
      "Reprends le programme précédent et ajoute un commentaire au-dessus de chaque print() pour expliquer ce qu'il affiche.",
    starterCode: `void main() {
  print('Ayoub');
  print('25 ans');
  print('Oujda');
}`,
    solutionCode: `void main() {
  // Affiche le prénom
  print('Ayoub');

  // Affiche l'âge
  print('25 ans');

  // Affiche la ville
  print('Oujda');
}`,
    hint: "Un commentaire sur une ligne commence par //.",
  },
  {
    id: 'ex-1-4',
    lessonSlug: 'introduction',
    title: 'Trouve l\u2019erreur',
    difficulty: 'moyen',
    statement:
      "Ce programme ne compile pas. Corrige-le pour qu'il affiche 'Bonjour, Dart !' correctement.\n\nvoid main() {\n  print(Bonjour, Dart !);\n}",
    starterCode: `void main() {
  print(Bonjour, Dart !);
}`,
    solutionCode: `void main() {
  print('Bonjour, Dart !');
}`,
    hint: "Un texte (String) doit toujours être entouré de guillemets simples ou doubles en Dart.",
  },
]

export default exercises1
