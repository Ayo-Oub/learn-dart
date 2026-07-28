export default {
  id: 1,
  slug: 'introduction',
  title: 'Introduction à Dart',
  summary:
    "Comprendre à quoi sert Dart, l'installer, et écrire son tout premier programme.",
  duration: '10 min',

  objectives: [
    "Savoir ce qu'est Dart et pourquoi on l'utilise (notamment avec Flutter)",
    'Installer le SDK Dart et vérifier son installation',
    'Écrire et exécuter un premier programme Dart',
    'Comprendre la structure minimale : fonction main() et print()',
  ],

  sections: [
    {
      id: 'quest-ce-que-dart',
      heading: "Qu'est-ce que Dart ?",
      content: `Dart est un langage de programmation créé par Google, sorti en 2011.
Il est surtout connu comme le langage utilisé par **Flutter**, le framework qui
permet de créer des applications mobiles, web et desktop à partir d'un seul
code source.

Dart a été pensé pour être :
- **Facile à apprendre** si tu connais déjà JavaScript, Java ou C#.
- **Rapide** : le code est compilé (pas seulement interprété).
- **Orienté objet** : tout, ou presque, est un objet en Dart.`,
    },
    {
      id: 'installation',
      heading: 'Installer Dart',
      content: `Deux options s'offrent à toi :

1. **Installer le SDK Dart seul** — utile si tu veux juste apprendre le langage.
   Rendez-vous sur dart.dev/get-dart et suis les instructions pour ton système.

2. **Installer Flutter** — qui inclut déjà le SDK Dart. Recommandé si ton
   objectif final est de créer des applications avec Flutter.

Une fois installé, vérifie que tout fonctionne avec cette commande dans ton
terminal :`,
      code: 'dart --version',
    },
    {
      id: 'premier-programme',
      heading: 'Ton premier programme',
      content: `Tout programme Dart démarre par une fonction spéciale appelée \`main()\`.
C'est le point d'entrée : c'est la première chose qui s'exécute.

La fonction \`print()\` sert à afficher du texte dans la console.`,
      code: `void main() {
  print('Bonjour, Dart !');
}`,
    },
    {
      id: 'executer',
      heading: 'Exécuter le programme',
      content: `Enregistre ce code dans un fichier nommé \`main.dart\`, puis exécute-le
depuis le terminal avec la commande suivante :`,
      code: 'dart run main.dart',
    },
    {
      id: 'commentaires',
      heading: 'Les commentaires',
      content: `Un commentaire est une ligne de texte ignorée par le programme — utile pour
laisser des notes. En Dart, il existe deux façons d'en écrire :`,
      code: `// Ceci est un commentaire sur une seule ligne

/*
  Ceci est un commentaire
  sur plusieurs lignes
*/

void main() {
  // On affiche un message de bienvenue
  print('Bonjour, Dart !');
}`,
    },
  ],

  codeExample: `void main() {
  print('Bonjour, Dart !');
}`,

  keyPoints: [
    'Dart est le langage utilisé par Flutter, créé par Google.',
    'Tout programme Dart commence par une fonction main().',
    "print() affiche du texte dans la console.",
    'On exécute un fichier Dart avec la commande `dart run nom_du_fichier.dart`.',
  ],

  exercisePreview: {
    prompt:
      "Modifie le programme ci-dessus pour qu'il affiche ton prénom au lieu de 'Dart'.",
    hint: 'Remplace le texte entre les guillemets simples dans print(...).',
  },

  next: 'variables',
}
