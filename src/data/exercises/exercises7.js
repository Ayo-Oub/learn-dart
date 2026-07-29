const exercises7 = [
  {
    id: 'ex-7-1',
    lessonSlug: 'ensembles',
    title: 'Créer un Set sans doublons',
    difficulty: 'facile',
    statement:
      "Crée un Set<String> de couleurs en écrivant volontairement deux fois la même couleur. Affiche le Set et observe qu'elle n'apparaît qu'une seule fois.",
    starterCode: `void main() {
  // À compléter : crée un Set avec un doublon volontaire
}`,
    solutionCode: `void main() {
  Set<String> couleurs = {'rouge', 'vert', 'bleu', 'rouge'};

  print(couleurs);   // {rouge, vert, bleu}
}`,
    hint: 'Un Set s\u2019écrit avec des accolades { } ; les doublons sont automatiquement ignorés.',
  },
  {
    id: 'ex-7-2',
    lessonSlug: 'ensembles',
    title: 'Ajouter, retirer, vérifier',
    difficulty: 'facile',
    statement:
      "Pars d'un Set vide de String (villesVisitees). Ajoute 'Oujda', 'Rabat' et 'Fès'. Vérifie avec contains() si 'Rabat' en fait partie, puis retire 'Rabat' et affiche le Set final.",
    starterCode: `void main() {
  Set<String> villesVisitees = <String>{};

  // À compléter
}`,
    solutionCode: `void main() {
  Set<String> villesVisitees = <String>{};

  villesVisitees.add('Oujda');
  villesVisitees.add('Rabat');
  villesVisitees.add('Fès');

  print(villesVisitees.contains('Rabat'));   // true

  villesVisitees.remove('Rabat');
  print(villesVisitees);                      // {Oujda, Fès}
}`,
    hint: '<String>{} crée un Set<String> vide (attention, {} tout seul crée une Map, pas un Set).',
  },
  {
    id: 'ex-7-3',
    lessonSlug: 'ensembles',
    title: 'Éliminer les doublons d\u2019une liste',
    difficulty: 'moyen',
    statement:
      "Pars d'une liste d'entiers contenant des doublons. Transforme-la en Set avec toSet() pour éliminer les doublons, puis reconvertis-la en liste avec toList() et affiche le résultat.",
    starterCode: `void main() {
  List<int> notes = [12, 15, 12, 9, 15, 18, 9];

  // À compléter
}`,
    solutionCode: `void main() {
  List<int> notes = [12, 15, 12, 9, 15, 18, 9];

  Set<int> notesUniques = notes.toSet();
  List<int> notesSansDoublons = notesUniques.toList();

  print(notesSansDoublons);   // [12, 15, 9, 18]
}`,
    hint: '.toSet() élimine les doublons automatiquement ; .toList() reconvertit ensuite en List.',
  },
  {
    id: 'ex-7-4',
    lessonSlug: 'ensembles',
    title: 'Les langues en commun',
    difficulty: 'moyen',
    statement:
      "Crée deux Set<String> représentant les langues parlées par deux personnes (avec au moins une langue en commun). Affiche les langues qu'elles ont en commun grâce à intersection().",
    starterCode: `void main() {
  Set<String> languesAyoub = {'français', 'arabe', 'anglais'};
  Set<String> languesSara = {'arabe', 'espagnol'};

  // À compléter
}`,
    solutionCode: `void main() {
  Set<String> languesAyoub = {'français', 'arabe', 'anglais'};
  Set<String> languesSara = {'arabe', 'espagnol'};

  print(languesAyoub.intersection(languesSara));   // {arabe}
}`,
    hint: 'set1.intersection(set2) renvoie uniquement les éléments présents dans les deux Sets.',
  },
  {
    id: 'ex-7-5',
    lessonSlug: 'ensembles',
    title: 'Union, intersection et différence',
    difficulty: 'difficile',
    statement:
      "À partir de deux Set<String> d'élèves inscrits à deux clubs différents (Musique et Sport), affiche : tous les élèves inscrits à au moins un club (union), les élèves inscrits aux deux (intersection), et les élèves inscrits seulement au club Musique (difference).",
    starterCode: `void main() {
  Set<String> clubMusique = {'Ayoub', 'Sara', 'Yassine'};
  Set<String> clubSport = {'Sara', 'Karim', 'Yassine'};

  // À compléter
}`,
    solutionCode: `void main() {
  Set<String> clubMusique = {'Ayoub', 'Sara', 'Yassine'};
  Set<String> clubSport = {'Sara', 'Karim', 'Yassine'};

  print(clubMusique.union(clubSport));
  // {Ayoub, Sara, Yassine, Karim}

  print(clubMusique.intersection(clubSport));
  // {Sara, Yassine}

  print(clubMusique.difference(clubSport));
  // {Ayoub}
}`,
    hint: 'union = tous les deux ensemble, intersection = communs aux deux, difference = seulement dans le premier.',
  },
]

export default exercises7
