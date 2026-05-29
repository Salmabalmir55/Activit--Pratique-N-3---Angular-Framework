# Activité Pratique N°3 : Framework Angular - Concepts Fondamentaux et Démo (Angular 19)

Ce dépôt contient la réalisation de l'**Activité Pratique N°3** dédiée à la prise en main et à la compréhension des concepts de base du framework **Angular (v19)**. L'activité s'appuie sur le cours pratique dispensé par le **Professeur Mohamed YOUSSFI**.

---

## 🎯 Objectifs de l'activité
* Comprendre la différence fondamentale entre le modèle de rendu côté serveur (SSR) et le modèle de rendu côté client (CSR / Single Page Application).
* Maîtriser l'environnement global et la structure d'une application Angular moderne.
* Mettre en pratique l'architecture **Standalone** (applications sans modules `NgModule`).
* Pratiquer les concepts clés : Composants, Data Binding, Directives, Services, Routage et intégration avec une API REST (Backend) en gérant la sécurité CORS.

---

## 🛠️ Concepts Théoriques & Architecture Abordés

### 1. Modèle Client-Side Rendering (CSR) vs Server-Side Rendering (SSR)
Contrairement aux applications classiques basées sur le rendu serveur (comme Spring Boot avec Thymeleaf), Angular repose principalement sur le modèle **Single Page Application (SPA)**. 
* **SSR (Server-Side) :** Le serveur génère le HTML complet à chaque requête.
* **CSR (Client-Side) :** Le serveur fournit une structure HTML minimale (`index.html`) accompagnée de fichiers JavaScript compilés. C'est ensuite le navigateur (via le moteur JavaScript d'Angular) qui assemble, affiche dynamiquement les données et prend en charge l'expérience utilisateur sans recharger la page.

### 2. De l'Architecture Modulaire aux Standalone Components
Historiquement (d'Angular 2 à Angular 14), le framework s'appuyait obligatoirement sur la notion de modules globaux (`NgModule`). Depuis Angular 14+, et par défaut à partir de la version 17/19, la tendance est aux **Applications Standalone**. Les composants sont désormais autonomes, ils importent directement leurs propres dépendances, ce qui allège considérablement la configuration globale et simplifie la structure du projet.

### 3. TypeScript : Le langage de base
L'application est entièrement développée en **TypeScript**, un surensemble typé et orienté objet de JavaScript développé par Microsoft. Il apporte une structure rigoureuse (classes, interfaces, typage fort, décorateurs) indispensable pour la maintenance de grands projets d'entreprise, avant d'être compilé en JavaScript natif pour le navigateur.

---

## 💻 Fonctionnalités Implémentées dans la Démo
L'application pratique met en œuvre un mini-projet complet de gestion de données comprenant :

* **Routing & Navigation** : Configuration des routes pour naviguer entre les différentes vues de la SPA de manière fluide via `router-outlet`.
* **Data Binding** : Utilisation des mécanismes d'affichage et de capture des données (Interpolation, Property Binding, Event Binding et Two-way Data Binding).
* **Communication HTTP (Services & HttpClient)** : Mise en place d'un service Angular dédié pour envoyer des requêtes HTTP asynchrones (`GET`, `DELETE`) vers un Backend REST.
* **Gestion du CORS (Cross-Origin Resource Sharing)** : 
  * Configuration de l'annotation `@CrossOrigin` (avec domaine ciblé ou `*`) côté Backend (Spring Boot).
  * Compréhension du mécanisme de pré-vérification du navigateur : envoi d'une requête HTTP avec la méthode `OPTIONS` (vérification des autorisations) avant l'exécution de la requête réelle (ex: `DELETE`).

---

## 🚀 Installation et Démarrage

### Prérequis
Assurez-vous d'avoir installé sur votre machine :
* [Node.js](https://nodejs.org/) (version LTS compatible avec Angular 19)
* [Angular CLI](https://angular.io/cli) installé globalement via la commande :
```bash
  npm install -g @angular/cli
