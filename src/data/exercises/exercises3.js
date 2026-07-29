const exercises3 = [
  {
    id: 'ex-3-1',
    lessonSlug: 'conditions',
    title: 'Pair ou impair',
    difficulty: 'facile',
    statement:
      "Écris un programme qui déclare un nombre entier et affiche 'Pair' s'il est pair, ou 'Impair' s'il ne l'est pas.",
    starterCode: `void main() {
  int nombre = 7;

  // À compléter
}`,
    solutionCode: `void main() {
  int nombre = 7;

  if (nombre % 2 == 0) {
    print('Pair');
  } else {
    print('Impair');
  }
}`,
    hint: 'Le reste de la division par 2 s\u2019obtient avec %. nombre % 2 == 0 veut dire "pair".',
  },
  {
    id: 'ex-3-2',
    lessonSlug: 'conditions',
    title: 'La majorité',
    difficulty: 'facile',
    statement:
      "Déclare une variable age. Affiche 'Majeur' si age est supérieur ou égal à 18, sinon affiche 'Mineur'.",
    starterCode: `void main() {
  int age = 16;

  // À compléter
}`,
    solutionCode: `void main() {
  int age = 16;

  if (age >= 18) {
    print('Majeur');
  } else {
    print('Mineur');
  }
}`,
    hint: 'Utilise l\u2019opérateur >= pour "supérieur ou égal à".',
  },
  {
    id: 'ex-3-3',
    lessonSlug: 'conditions',
    title: 'La mention au bac',
    difficulty: 'moyen',
    statement:
      "Déclare une variable note (sur 20). Affiche la mention correspondante avec une chaîne de else if :\n\n- note >= 16 -> 'Très bien'\n- note >= 14 -> 'Bien'\n- note >= 12 -> 'Assez bien'\n- note >= 10 -> 'Passable'\n- sinon -> 'Ajourné'",
    starterCode: `void main() {
  double note = 13.5;

  // À compléter
}`,
    solutionCode: `void main() {
  double note = 13.5;

  if (note >= 16) {
    print('Très bien');
  } else if (note >= 14) {
    print('Bien');
  } else if (note >= 12) {
    print('Assez bien');
  } else if (note >= 10) {
    print('Passable');
  } else {
    print('Ajourné');
  }
}`,
    hint: 'Place les conditions du plus grand seuil au plus petit, sinon les premières bloquent les suivantes.',
  },
  {
    id: 'ex-3-4',
    lessonSlug: 'conditions',
    title: 'Accès autorisé ?',
    difficulty: 'moyen',
    statement:
      "Une personne peut entrer dans une salle si elle a plus de 18 ans ET si elle possède un badge. Déclare age et aBadge, puis affiche 'Accès autorisé' ou 'Accès refusé' selon le cas, en une seule condition (avec &&).",
    starterCode: `void main() {
  int age = 20;
  bool aBadge = false;

  // À compléter
}`,
    solutionCode: `void main() {
  int age = 20;
  bool aBadge = false;

  if (age > 18 && aBadge) {
    print('Accès autorisé');
  } else {
    print('Accès refusé');
  }
}`,
    hint: '&& veut dire "et" : les deux conditions doivent être vraies en même temps.',
  },
]

export default exercises3
