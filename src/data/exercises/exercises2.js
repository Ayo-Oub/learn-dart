const exercises2 = [
  {
    id: 'ex-2-1',
    lessonSlug: 'variables',
    title: 'Ta carte d\u2019identité',
    difficulty: 'facile',
    statement:
      "Déclare 4 variables : ton prénom (String), ton âge (int), ta taille en mètres (double), et si tu es étudiant ou non (bool). Affiche chaque variable avec un print() séparé.",
    starterCode: `void main() {
  // À compléter
}`,
    solutionCode: `void main() {
  String prenom = 'Ayoub';
  int age = 25;
  double taille = 1.78;
  bool estEtudiant = true;

  print(prenom);
  print(age);
  print(taille);
  print(estEtudiant);
}`,
    hint: 'Un type par variable : String, int, double, bool.',
  },
  {
    id: 'ex-2-2',
    lessonSlug: 'variables',
    title: 'Une seule phrase',
    difficulty: 'facile',
    statement:
      "Reprends les 4 variables de l'exercice précédent et affiche-les dans une seule phrase, grâce à l'interpolation de chaînes ($variable).",
    starterCode: `void main() {
  String prenom = 'Ayoub';
  int age = 25;
  double taille = 1.78;

  // Affiche une seule phrase avec les 3 variables
}`,
    solutionCode: `void main() {
  String prenom = 'Ayoub';
  int age = 25;
  double taille = 1.78;

  print('$prenom a $age ans et mesure $taille m.');
}`,
    hint: 'Place $ directement devant le nom de la variable, à l\u2019intérieur des guillemets.',
  },
  {
    id: 'ex-2-3',
    lessonSlug: 'variables',
    title: 'var, final ou const ?',
    difficulty: 'moyen',
    statement:
      "Pour chacune de ces 3 variables, choisis le mot-clé le plus adapté (var, final ou const) et explique pourquoi en commentaire :\n\n1. Le score d'un joueur, qui augmente pendant la partie.\n2. Le nom de l'utilisateur connecté, qui ne change pas une fois la page chargée.\n3. Le nombre de jours dans une semaine.",
    starterCode: `// 1. Score du joueur
___ score = 0;

// 2. Nom de l'utilisateur connecté
___ utilisateur = 'Ayoub';

// 3. Nombre de jours dans une semaine
___ joursParSemaine = 7;`,
    solutionCode: `// 1. Score du joueur : la valeur va changer -> var
var score = 0;

// 2. Nom de l'utilisateur connecté : fixé une fois, à l'exécution -> final
final utilisateur = 'Ayoub';

// 3. Nombre de jours dans une semaine : valeur fixe connue à l'avance -> const
const joursParSemaine = 7;`,
    hint: 'var change ; final est fixé à l\u2019exécution ; const est une vraie constante connue avant l\u2019exécution.',
  },
  {
    id: 'ex-2-4',
    lessonSlug: 'variables',
    title: 'Trouve l\u2019erreur',
    difficulty: 'moyen',
    statement:
      "Ce code ne compile pas. Trouve l'erreur et corrige-la.\n\nvoid main() {\n  final ville = 'Oujda';\n  ville = 'Rabat';\n  print(ville);\n}",
    starterCode: `void main() {
  final ville = 'Oujda';
  ville = 'Rabat';
  print(ville);
}`,
    solutionCode: `void main() {
  var ville = 'Oujda';
  ville = 'Rabat';
  print(ville);
}`,
    hint: 'Une variable final ne peut recevoir sa valeur qu\u2019une seule fois.',
  },
]

export default exercises2
