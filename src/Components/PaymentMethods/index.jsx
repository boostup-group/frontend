import React from 'react'
import Image from 'next/image'
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import Link from 'next/link'
import PhotoZero from '../../../public/assets/images/inner-page/payment-methods/photo-0.png';
import PhotoOne from '../../../public/assets/images/inner-page/payment-methods/photo-1.png';
import PhotoTwo from '../../../public/assets/images/inner-page/payment-methods/photo-2.png';
import PhotoThree from '../../../public/assets/images/inner-page/payment-methods/photo-3.png';
import PhotoFour from '../../../public/assets/images/inner-page/payment-methods/photo-4.png';
import PhotoFive from '../../../public/assets/images/inner-page/payment-methods/photo-5.png';
import PhotoSix from '../../../public/assets/images/inner-page/payment-methods/photo-6.png';




const PaymentMethods = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Avec Netflix Tunisie, payez votre abonnement en dinar tunisien !</h1>

            <p className="mb-6">
                Réaliser un paiement en ligne peut parfois sembler complexe et préoccupant, surtout lorsqu'il s'agit de protéger vos informations personnelles et financières. Sur notre site, nous mettons un point d'honneur à garantir la sécurité et la simplicité de vos transactions. Dans cette page, nous vous guiderons pas à pas pour effectuer vos paiements de manière sécurisée, tout en vous offrant des astuces et des conseils pour une expérience d'achat en ligne sereine et sans souci.
            </p>

            <div className="mb-8">
                <Image src={PhotoZero} alt="Photo 0" width={500} height={300} className="rounded-lg" />
            </div>

            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>1 – Utilisez l'application D17</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4">
                        L'application D17 est l'une des solutions les plus pratiques pour effectuer vos paiements sur Netflix en Tunisie. Grâce à son interface intuitive, le processus est à la fois rapide et sécurisé. Pour commencer, il vous suffit de lier votre compte bancaire tunisien à l'application D17. Une fois cette étape réalisée, vous pouvez facilement initier un transfert en appuyant sur le bouton « Transfert » situé en bas de l'écran.
                    </p>
                    <p className="mb-4">
                        Ensuite, entrez le montant que vous souhaitez verser ainsi que le numéro de compte du destinataire. Cette étape est essentielle pour garantir que les fonds soient dirigés vers le bon compte. Après avoir vérifié les informations saisies, cliquez sur le bouton « Continuer ».
                    </p>
                    <p className="mb-4">
                        Pour finaliser la transaction, vous devrez entrer votre code PIN, qui agit comme une couche de sécurité supplémentaire pour protéger vos données financières. Une fois le code PIN validé, votre paiement sera immédiatement pris en compte.
                    </p>
                    <div className="lg:flex justify-between sm:block">
                        <Image src={PhotoOne} alt="Photo 1" width={300} height={200} className="rounded-lg" />
                        <Image src={PhotoTwo} alt="Photo 2" width={300} height={200} className="rounded-lg" />
                    </div>
                </CardContent>
            </Card>

            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>2 - Utilisez le service ClickToPay sur le site</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4">
                        Pour réaliser vos paiements en ligne sur notre site de manière simple et sécurisée, nous vous recommandons d'utiliser le service ClickToPay. Que vous possédiez une carte monétique, une carte Visa, ou une carte Mastercard, ClickToPay facilite grandement vos transactions. Commencez par remplir vos informations personnelles sur notre page de commande. Une fois cette étape complétée, cliquez sur le bouton « Passer commande ».
                    </p>
                    <p className="mb-4">
                        Vous serez alors redirigé vers une page dédiée où vous pourrez entrer les détails de votre carte bancaire. Saisissez les informations requises de manière précise et vérifiez bien leur exactitude. Pour finaliser votre achat, cliquez sur « Paiement ».
                    </p>
                    <div className="lg:flex justify-between sm:block">
                        <Image src={PhotoThree} alt="Photo 3" width={300} height={200} className="rounded-lg" />
                        <Image src={PhotoFour} alt="Photo 4" width={300} height={200} className="rounded-lg" />
                    </div>
                </CardContent>
            </Card>

            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>3 - Paiement par virement bancaire</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4">
                        Chez Netflix Tunisie, nous nous efforçons de rendre votre expérience d'achat aussi simple et agréable que possible. Pour cela, nous vous offrons la possibilité de régler vos paiements par virement bancaire, en partenariat avec deux banques locales : Zitouna Banque et Banque de Tunisie.
                    </p>
                    <p className="mb-4">Pour effectuer votre paiement, voici les étapes à suivre :</p>
                    <ol className="list-decimal list-inside mb-4">
                        <li className="mb-2">Contactez notre équipe de support client : Vous pouvez les joindre via notre site web ou par téléphone pour obtenir le Relevé d'Identité Bancaire (RIB) du compte bénéficiaire.</li>
                        <li className="mb-2">Réalisez le virement : Une fois en possession du RIB, vous pouvez procéder au virement bancaire standard depuis votre propre compte. Assurez-vous de vérifier les informations saisies pour éviter toute erreur.</li>
                        <li className="mb-2">Confirmez votre paiement : Après avoir effectué le virement, nous vous recommandons de nous envoyer une confirmation de transaction afin que nous puissions valider votre paiement rapidement et activer votre abonnement sans délai.</li>
                    </ol>
                    <p className="mb-4">
                        En choisissant cette méthode de paiement, vous bénéficiez d'une solution sûre et pratique, tout en profitant de nos services sans interruption.
                    </p>
                    <Image src={PhotoFive} alt="Photo 5" width={400} height={200} className="rounded-lg" />
                </CardContent>
            </Card>

            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>4 - Paiement par mandat minute</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4">
                        Ce service vous offre la possibilité d'envoyer un mandat qui vous permet d'envoyer des sommes d'argent d'une manière quasi instantanée à partir de n'importe quel bureau de poste en toute sécurité et sans recours à aucun support papier.
                    </p>
                    <p className="mb-4">Si vous choisissez cette méthode de paiement, suivez les étapes suivantes :</p>
                    <ul className="list-disc list-inside mb-4">
                        <li className="mb-2">Contactez notre équipe de support : Vous pouvez le faire de deux manières. Soit en remplissant le formulaire de contact en ligne sur notre site web, soit en envoyant un message directement à notre numéro WhatsApp au +21654993969. Notre équipe se fera un plaisir de vous fournir toutes les informations nécessaires pour compléter votre mandat.</li>
                        <li className="mb-2">Recevez les instructions : Nous vous transmettrons les détails précis à inclure dans votre mandat, ainsi que les réponses à toutes vos questions concernant cette méthode de paiement. Suivez les instructions fournies pour effectuer votre mandat.</li>
                        <li className="mb-2">Envoyez une preuve de paiement : Une fois le mandat réalisé, n'hésitez pas à nous envoyer une preuve de paiement. Cela nous aidera à traiter et à accélérer le traitement de votre commande de manière efficace.</li>
                    </ul>
                    <p className="mb-4">
                        En utilisant ce service, vous bénéficiez d'une option de paiement simple et sécurisée, tout en facilitant la gestion de votre commande.
                    </p>
                    <Image src={PhotoSix} alt="Photo 6" width={400} height={200} className="rounded-lg" />
                </CardContent>
            </Card>

            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>5 - Paiement en espèces en mains propres</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4">
                        Pour ceux qui préfèrent effectuer leurs paiements en espèces en personne, nous offrons la possibilité de régler votre commande lors d'une remise en mains propres dans les villes de Tunis, Sfax et Nabeul.
                    </p>
                    <p className="mb-4">Voici comment cela fonctionne :</p>
                    <ol className="list-decimal list-inside mb-4">
                        <li className="mb-2">Choisissez « autres modes de paiement » lors de la finalisation de votre commande.</li>
                        <li className="mb-2">Notre équipe de support vous contactera pour confirmer votre commande et organiser la rencontre. Ils vous fourniront tous les détails nécessaires, y compris l'adresse exacte où vous devrez vous rendre pour effectuer le paiement.</li>
                        <li className="mb-2">Rendez-vous à l'adresse indiquée pour remettre le montant en espèces directement à notre représentant. Ce dernier s'assurera que votre paiement est bien reçu et enregistré.</li>
                    </ol>
                    <p className="mb-4">
                        Cette option vous permet de régler votre achat de manière sécurisée et pratique, tout en recevant un service personnalisé pour vous guider tout au long du processus.
                    </p>
                </CardContent>
            </Card>

            <div className="bg-gray-100 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Besoin d'aide ?</h2>
                <p className="mb-4">
                    Si vous avez des questions concernant nos différentes méthodes de paiement ou toute autre préoccupation, n'hésitez pas à nous contacter. Notre équipe est disponible tous les jours de la semaine pour vous garantir une expérience d'achat fluide et satisfaisante.
                </p>
                <p className="mb-4">
                    Pour nous joindre, vous pouvez remplir notre formulaire de contact en ligne. Si vous préférez une assistance immédiate, vous pouvez également nous appeler directement au numéro <strong>+216 54 993 969</strong>. Nous sommes là pour vous aider et répondre à toutes vos questions.
                </p>
                <Button className='relative inline-flex items-center justify-center rounded-md bg-[#E50914] text-white dark:bg-white px-8 py-4 font-bold  dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
                    <Link href="tel:+216 54 993 969" aria-hidden="true">Contactez-nous</Link>
                </Button>
            </div>
        </div>
    )
}

export default PaymentMethods