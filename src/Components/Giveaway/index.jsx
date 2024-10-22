import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function GiveawayPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">Netflixtunisie organise un giveaway de compte Netflix gratuit</h1>

            <Card className="mb-8">
                <CardHeader>
                    <CardTitle className="text-2xl">Comment participer et gagner ?</CardTitle>
                    <CardDescription className="text-md text-black">Découvrez comment vous pouvez gagner un abonnement Netflix entièrement gratuit !</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                        <p className="text-sm leading-relaxed">
                            Vous aimez les séries à binge-watcher, les films qui vous tiennent en haleine, et les documentaires fascinants ? Chez Netflixtunisie, on sait à quel point Netflix fait partie de votre quotidien. C'est pourquoi on a décidé de vous offrir une chance de gagner un compte Netflix gratuit ! Oui, vous avez bien entendu : un abonnement Netflix entièrement gratuit, rien que pour vous. Et si on vous disait que participer est aussi simple que de cliquer sur quelques boutons ? Lisez la suite pour découvrir comment faire !
                        </p>
                    </div>
                    <div className="flex-1">
                        <Image
                            src="/placeholder.svg?height=300&width=400"
                            alt="Giveaway Netflix Tunisie"
                            width={400}
                            height={300}
                            className="rounded-lg w-full h-auto"
                        />
                    </div>
                </CardContent>
            </Card>

            <Card className="mb-8">
                <CardHeader>
                    <CardTitle className="text-2xl">Pourquoi NetflixTunisie organise ce giveaway?</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 space-y-4">
                        <p className="text-sm leading-relaxed">
                            Chez Netflixtunisie, nous avons décidé d'organiser ce giveaway parce que notre mission est de vous proposer des forfaits avantageux pour profiter de vos films et séries préférés, sans vous ruiner. Nous savons que vous êtes nombreux à avoir souscrit à des abonnements payants avec un compte client actif, mais ce concours est notre façon de vous dire merci pour votre fidélité.
                        </p>
                        <p className="text-sm leading-relaxed">
                            Ce giveaway est également une occasion en or pour vous de connecter encore plus avec notre communauté. Que vous vous connectez à votre compte pour la première fois ou que vous soyez déjà un abonné, ce concours est pour vous !  Il vous suffit de suivre quelques étapes simples, comme indiqué ci-dessous pour participer.
                        </p>
                        <p className="text-sm leading-relaxed">
                            De plus, en étant abonné, vous pouvez accéder à un nombre illimité de contenus. Si vous avez oublié votre mot de passe, pas de souci, vous pouvez facilement le réinitialiser et revenir dans votre espace.
                        </p>
                    </div>
                    <div className="flex-1">
                        <Image
                            src="/placeholder.svg?height=300&width=400"
                            alt="Netflix Tunisie Community"
                            width={400}
                            height={300}
                            className="rounded-lg w-full h-auto"
                        />
                    </div>
                </CardContent>
            </Card>

            <h2 className="text-3xl font-semibold mb-4">Les conditions pour participer au giveaway Netflixtunisie</h2>
            <p className="text-sm leading-relaxed mb-8">Maintenant, entrons dans le vif du sujet : comment participer à ce giveaway et tenter de remporter votre compte Netflix gratuit. Ne vous inquiétez pas, c'est vraiment facile ! Voici ce que vous devez faire :</p>

            <Card className="mb-8">
                <CardHeader>
                    <CardTitle className="text-2xl">1 – Aimez nos 3 pages</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 space-y-4">
                        <p className="text-sm leading-relaxed">
                            La première étape de cette aventure consiste à exprimer un peu d'amour pour nos pages sur les réseaux sociaux. Nous vous demandons de liker 3 pages spécifiques, et voici pourquoi c'est si important.
                        </p>
                        <p className="text-sm font-medium">Cliquez sur les liens ci-dessous pour aimer nos pages :</p>
                        <div className="flex flex-row space-x-2">
                            <Button asChild className="flex-1 bg-[#E50914]">
                                <Link href="#">Page 1</Link>
                            </Button>
                            <Button asChild className="flex-1 bg-[#E50914]">
                                <Link href="#">Page 2</Link>
                            </Button>
                            <Button asChild className="flex-1 bg-[#E50914]">
                                <Link href="#">Page 3</Link>
                            </Button>
                        </div>
                        <p className="text-sm leading-relaxed">
                            En aimant ces pages, vous ne faites pas seulement un geste simple, mais vous rejoignez une communauté dynamique et engagée. C'est notre manière de rester connectés avec vous et de vous informer en temps réel de toutes nos offres exclusives, de nos nouveautés, et de toutes les surprises que nous vous réservons.
                        </p>
                        <p className="text-sm leading-relaxed">
                            Chaque page est une porte ouverte sur des contenus enrichissants, des promotions intéressantes, et des informations utiles qui vous permettront de tirer le meilleur parti de nos services.
                        </p>
                        <p className="text-sm leading-relaxed">
                            Croyez-nous, cet engagement en vaut vraiment la peine, et nous sommes impatients de vous compter parmi les membres actifs de notre communauté en ligne.
                        </p>
                    </div>
                    <div className="flex-1">
                        <Image
                            src="/placeholder.svg?height=300&width=400"
                            alt="Like our pages"
                            width={400}
                            height={300}
                            className="rounded-lg w-full h-auto"
                        />
                    </div>
                </CardContent>
            </Card>

            <Card className="mb-8">
                <CardHeader>
                    <CardTitle className="text-2xl">2 – Taggez 3 Amis (avec leur nom et prénom)</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 space-y-4">
                        <p className="text-sm leading-relaxed">
                            La deuxième étape pour valider votre participation consiste à taguer trois de vos amis dans les commentaires de la publication dédiée à notre giveaway. Mais attention, il y a une petite précision importante : il est essentiel que vous utilisiez leur nom et prénom complet.
                        </p>
                        <p className="text-sm leading-relaxed">
                            Vous vous demandez peut-être pourquoi cette règle est en place ? Eh bien, elle est là pour garantir que notre concours se déroule de manière juste et équitable.
                        </p>
                        <p className="text-sm leading-relaxed">
                            En demandant à ce que vous taguiez vos amis en utilisant leurs noms et prénoms complets, nous pouvons éviter la participation de faux comptes et ainsi maintenir l'intégrité et l'esprit convivial du concours.
                        </p>
                        <p className="text-sm leading-relaxed">
                            Nous souhaitons avant tout que cet événement reste fun et ouvert à tous les vrais participants, afin que chacun ait une chance égale de remporter les lots en jeu.
                        </p>
                        <p className="text-sm leading-relaxed">
                            Alors, choisissez bien vos amis, taguez-les correctement, et profitez ensemble de cette opportunité unique !
                        </p>
                    </div>
                    <div className="flex-1">
                        <Image
                            src="/placeholder.svg?height=300&width=400"
                            alt="Tag your friends"
                            width={400}
                            height={300}
                            className="rounded-lg w-full h-auto"
                        />
                    </div>
                </CardContent>
            </Card>

            <Card className="mb-8">
                <CardHeader>
                    <CardTitle className="text-2xl">3 – Partagez la publication</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 space-y-4">
                        <p className="text-sm leading-relaxed">
                            La troisième et dernière étape pour finaliser votre inscription est tout aussi simple qu'importante : partager la publication du giveaway sur votre propre profil. Cette étape joue un rôle crucial dans notre processus, et voici pourquoi.
                        </p>
                        <p className="text-sm leading-relaxed">
                            En partageant la publication, vous ne faites pas seulement un geste pour vous-même, mais vous contribuez activement à agrandir notre communauté.
                        </p>
                        <p className="text-sm leading-relaxed">
                            Chaque partage permet de faire découvrir notre concours à un plus grand nombre de personnes, et ainsi, de faire grandir la communauté de ceux qui, comme vous, apprécient nos services et souhaitent en profiter davantage.
                        </p>
                        <p className="text-sm leading-relaxed">
                            C'est un excellent moyen de montrer votre engagement et votre soutien, tout en offrant à vos amis l'opportunité de participer eux aussi.
                        </p>
                        <p className="text-sm leading-relaxed">
                            Et soyons honnêtes, qui ne voudrait pas que ses amis aient aussi une chance de gagner un compte Netflix gratuit ? En partageant cette publication, vous donnez à vos amis l'occasion de tenter leur chance, et qui sait, peut-être qu'ils vous remercieront d'avoir partagé cette opportunité avec eux.
                        </p>
                    </div>
                    <div className="flex-1">
                        <Image
                            src="/placeholder.svg?height=300&width=400"
                            alt="Share the post"
                            width={400}
                            height={300}
                            className="rounded-lg w-full h-auto"
                        />
                    </div>
                </CardContent>
            </Card>

            <div className="bg-gray-100 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Comment finaliser votre participation</h2>
                <p className="mb-4">
                Que vous soyez fidèle à Netflix depuis des années ou que vous veniez tout juste de nous rejoindre, cette opportunité est ouverte à tous. Alors, pourquoi ne pas tenter votre chance ?
                </p>
                <p className="mb-4">
                Prenez simplement une capture d'écran des étapes et envoyez-la via WhatsApp au <strong>+216 54 993 969</strong>. Patientez au maximum 3 jours et nous vous contacterons pour vous remettre votre compte. Alors, prêt à profiter de vos films et séries préférés ?
                </p>
                <Button className='relative inline-flex items-center justify-center rounded-md bg-[#E50914] text-white dark:bg-white px-8 py-4 font-bold  dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
                    <Link href="tel:+216 54 993 969" aria-hidden="true">Contactez-nous</Link>
                </Button>
            </div>
        </div>
    )
}