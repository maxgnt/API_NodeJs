## TypeScript

typage statique : Detection des erreurs à la compilation
typage dynamique : Detection des erreurs à l'execution
Auto-completion : IDE plus intelligent (VSCode)
Ecosystème moderne : Support natif pour les modules, les classes, les interfaces, les fonctions fléchées, les destructurations, les générateurs, les itérateurs, les modules, les décorateurs, les async/await, etc.

Cas d'usage :
Application complexe d'entreprise
Projets avec plusiurs développeurs
APIs avec contrats d'interfaces stricts
Maintenance à long terme

## REST

REpresentational State Transfer
Architecture pour systèmes ditribués
Basé sur des ressources et leur état
Stateless
Interface uniforme
Les requêtes sont sans état = elles ne sont pas enregistrées ni conservées. Les requêtes sont indépendantes les unes des autres.

# Pricnipes clés

Ressources : Entités identifiées par des URLs
Représentation : Format des données (JSON, XML, HTML, etc.)
Methodes HTTP : Actions standardisées (GET, POST, PUT, DELETE)
Stateless : Pas de contexte stocké entre requêtes
HATEOAS : Hypermedia as the Engine of Application State

# Méthodes :

GET : Lire => Safe, Idempotent
POST : Créer => non Idempotent
PUT : Remplacer => Idempotent
PATCH : Modifier => Non idempotent
DELETE : Supprimer => Idempotent

# codes de statust HTTP

2xx : 200 OK, 201 created => succès
3xx 301 Moved, 304 Not modified => redirection
4xx 400 ad Request, 404 Not found => erreur client
5xxx 500 Internal Server Error => erreur serveur

RESTful
Conception des Points d'Accès (endpoints):
Centrées sur les ressources (noms, pas verbes)
Collections au pluriel
Hierarchie logique
Cohérence dans le nommage

## GraphQL et gRPC

REST : le standard le plus simple et la voie classique client/serveur
graphQL : une config plus complexe, des requetes plus precises et on va travailler avec un endpoint unique
gRPC : plus performant que les deux autres et moins adapté au web et navigateur web

REST : APIs Publiques, architecture simple, requetes HTTP
GraphQL ; Interfaces complexes, clients variés, requetes imbriquées, eviter overfetching
gRPC : Communication interne, Microservices, Haute perfromance, Services temps réel

## Sources TP :

Docs officielles :
Prettier : https://prettier.io/docs/configuration.html

## Mercredi

# Validation des données d'entreé

Polluer la base avec des données incrrectes
Sécuriser l'application
Améliorer l'expérience utilisateur

# Bibliothèques de validation

JOI
Middleware API
zod
express-validator

# Niveaux de validation

Front-end : Première ligne, UX
Middlware API : Avant traitement
Service : Règles métier
Base de données : Dernière ligne
