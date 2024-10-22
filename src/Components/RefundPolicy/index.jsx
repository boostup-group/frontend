import Head from 'next/head'

export default function RefundPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Head>
        <title>Politique de remboursement - Netflix Tunisie</title>
        <meta name="description" content="Politique de remboursement pour les services de streaming en Tunisie" />
      </Head>

      <h1 className="text-3xl font-bold mb-6">Politique de remboursement</h1>

      <p className="mb-4">
        Bienvenue sur notre page de politique de remboursement. Nous nous engageons à fournir des services de qualité aux utilisateurs tunisiens pour l'accès aux meilleures plateformes de streaming telles que Netflix, Shahid VIP, Apple TV, Prime Video et Disney+. Cependant, nous comprenons que certaines circonstances peuvent nécessiter des demandes de remboursement. Voici les conditions et modalités relatives à notre politique de remboursement.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Conditions générales de remboursement</h2>
      <p className="mb-4">
        Nous offrons des services d'abonnement en ligne à diverses plateformes de streaming sous forme de cartes ou de forfaits d'abonnement mensuel ou annuel. Les remboursements peuvent être effectués sous certaines conditions strictes. Veuillez lire attentivement les cas où un remboursement est applicable.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Cas éligibles à un remboursement</h2>
      <p className="mb-2">Un remboursement peut être envisagé dans les situations suivantes :</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Problèmes techniques non résolus : Si vous avez rencontré des problèmes techniques empêchant l'activation de votre abonnement, et que notre support technique n'a pas pu résoudre le problème dans un délai de 7 jours.</li>
        <li>Erreur dans la commande : En cas d'erreur de notre part (livraison d'un abonnement différent de celui commandé), nous vous rembourserons ou échangerons l'abonnement pour le bon service.</li>
        <li>Double facturation : Si vous avez été facturé deux fois pour le même abonnement, nous procéderons à un remboursement intégral pour la transaction en double.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Cas non éligibles au remboursement</h2>
      <p className="mb-2">Nous ne procéderons pas à des remboursements dans les cas suivants :</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Changement d'avis : Si vous décidez de ne plus utiliser l'abonnement après l'avoir activé, aucun remboursement ne sera accordé.</li>
        <li>Utilisation partielle : Si vous avez commencé à utiliser l'abonnement, même partiellement, il ne sera plus possible de demander un remboursement.</li>
        <li>Problèmes liés aux restrictions géographiques : Il est de votre responsabilité de vérifier que le contenu de la plateforme est accessible en Tunisie avant l'achat. Nous ne remboursons pas pour des problèmes d'accès aux contenus dus à des restrictions locales.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Procédure de demande de remboursement</h2>
      <p className="mb-2">Si vous estimez être éligible pour un remboursement, veuillez suivre ces étapes :</p>
      <ol className="list-decimal pl-6 mb-4">
        <li>Contactez notre support client via notre formulaire de contact ou à l'adresse email contact@netflixtunisie.com.</li>
        <li>Fournissez les détails de votre commande, notamment le numéro de la commande et une description claire du problème rencontré.</li>
        <li>Notre équipe examinera votre demande et vous informera de la décision dans un délai de 3 à 5 jours ouvrés.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Délai de traitement des remboursements</h2>
      <p className="mb-4">
        Une fois le remboursement approuvé, le traitement peut prendre jusqu'à 7 à 14 jours ouvrés, selon votre méthode de paiement et les délais bancaires. Nous vous enverrons une confirmation dès que le remboursement aura été effectué.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Méthodes de remboursement</h2>
      <p className="mb-4">
        Les remboursements seront effectués via le même mode de paiement utilisé lors de l'achat, sauf indication contraire. Si vous avez payé par carte bancaire, le montant sera crédité sur cette même carte. Pour les paiements par portefeuille électronique, le remboursement sera effectué sur votre compte associé.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Abonnements non remboursables</h2>
      <p className="mb-2">Certains abonnements à durée limitée ou promotions spéciales peuvent être non remboursables. Cela inclut, mais ne se limite pas aux :</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Offres spéciales à tarif réduit.</li>
        <li>Cartes cadeaux.</li>
        <li>Abonnements d'essai ou d'accès gratuit.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Modification de la politique de remboursement</h2>
      <p className="mb-4">
        Nous nous réservons le droit de modifier cette politique de remboursement à tout moment. Les modifications seront publiées sur cette page, et vous êtes invités à la consulter régulièrement. La politique en vigueur au moment de votre achat s'appliquera à votre commande.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Contactez-Nous</h2>
      <p className="mb-4">
        Si vous avez des questions concernant notre politique de remboursement, veuillez nous contacter à l'adresse suivante : <a href="mailto:contact@netflixtunisie.com" className="text-blue-600 hover:underline">contact@netflixtunisie.com</a> ou via notre formulaire de contact en ligne.
      </p>
    </div>
  )
}