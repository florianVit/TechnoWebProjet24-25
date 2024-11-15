# TechnoWebProjet24-25
<br>
Notre projet consiste à réaliser une application un système de gestion des livres pour une bibliothèque en partant d'un fichier quasiment vierge, et de créer le back-end ainsi que le front-end.
<br>
Le back-end est écrit avec le framework NestJS, et le front-end avec React. Le front-end utilise la librairie next. Pour la base de données, nous avons utiliser SQLite.
<br>
<br>

<br>

## Cahier des charges de l'application réaliser

### <mark>Fonctionnalités du Menu et Layout</mark>
- **Navigation principale** : Le menu doit permettre de naviguer entre les pages suivantes :
  - **Page d'accueil**
  - **Liste des livres**
  - **Liste des auteurs**

### <mark>Design du Menu</mark> 
---

### <mark>Bibliothèque</mark> :

Voici divers implémentations de la page bibliothèque, il y aura deux styles de pages : une pour la liste des livres et une autre pour les détails d'un livre.

#### Page de la Bibliothèque
Cette page permet de voir les différents livres disponibles dans la bibliothèque.

- **Affichage des livres** : 
  - Chaque livre affiche les informations suivantes :
    - **Titre**
    - **Date d’écriture**
    - **Auteur**
  - Affichage de la **note moyenne** du livre.

- **Barre de recherche** : Permet de filtrer les livres par **titre**. La recherche sera dynamique, filtrant les résultats dès que l'utilisateur tape.

- **Tri des livres** : L’utilisateur peut choisir le critère de tri des livres, comme par exemple :
  - Par titre
  - Par date de publication
  - Par note moyenne (lorsque les avis sont disponibles)

- **Création d’un livre** : 
  - Une modale permet à l'utilisateur d’ajouter un livre avec les champs suivants :
    - **Titre**
    - **Date de publication**
    - **Auteur** (un auteur existant ou un nouvel auteur à créer)

#### Page Détails d’un Livre
Cette page affichera les détails complets d’un livre sélectionné.

- **Accès à la page de détail** : Un clic sur un livre dans la liste des livres ouvre sa page de détail.

- **Contenu de la page de détail** : 
  - **Titre**
  - **Prix**
  - **Année de publication**
  - **Auteur** : Un lien cliquable permettant d'accéder à la page de l’auteur.

- **Suppression d’un livre** : Une modale de confirmation apparaîtra avant la suppression d’un livre.

- **Fil d’avis** :
  - Chaque livre peut avoir un fil d’avis, avec des notes allant de **1 à 5 étoiles** et un **commentaire écrit** optionnel.
  - Les avis sont affichés dans un **drawer** (drawer component de MUI).
  - Il est possible de trier les avis par **date de création** (ascendante ou descendante).

---

### <mark>Auteurs</mark> 

#### Page des Auteurs
Cette page permet d’afficher la liste de tous les auteurs de la bibliothèque.

- **Affichage de la liste des auteurs** :
  - **Nom**
  - **Photo** : Une image associée à chaque auteur.
  - **Nombre de livres publiés** : Affichage du nombre total de livres écrits par l'auteur.
  - **Moyenne des avis** : Calcul de la moyenne des avis des livres de l’auteur (lorsque les avis seront implémentés).

- **Recherche d’auteurs** : Barre de recherche pour filtrer les auteurs par **nom**.

- **Création d’un auteur** : Une modale permettra l’ajout d'un nouvel auteur avec les champs suivants :
  - **Nom**
  - **Photo** : Option de télécharger une photo.
  - **Biographie** : Option de saisir une biographie courte.

#### Page Détails d’un Auteur
Cette page permet d'afficher les informations détaillées sur un auteur.

- **Accès aux détails** : Un clic sur un auteur dans la liste des auteurs ouvre sa page de détails.

- **Contenu de la page d'un auteur** :
  - **Nom**
  - **Photo**
  - **Biographie** : Une courte description de l’auteur.
  - **Liste des livres** écrits par l’auteur (avec des liens vers leurs pages de détails).

- **Modification des informations** : L'utilisateur peut modifier les informations d’un auteur, telles que le nom, la photo, ou la biographie.

- **Gestion des livres de l’auteur** : L'utilisateur peut ajouter ou supprimer des livres liés à un auteur. 
  - **Ajouter un livre** : Un formulaire dans la page de l’auteur permet d’ajouter un nouveau livre.
  - **Supprimer un livre** : L’utilisateur peut supprimer un livre lié à cet auteur via une modale de confirmation.

- **Suppression d’un auteur** : L’utilisateur peut supprimer un auteur avec une modale de confirmation. Lors de la suppression, tous les livres associés à cet auteur seront également supprimés (avec confirmation).

---
### Front (Léo, Paul)
* Providers 
* Composants 
* Modèles 
* Pages 

### Back-end (Florian, Julien)
* Controller 
* Service 
* Repository 
* DTO 
* Presenter 
* Modèles 

<br>


