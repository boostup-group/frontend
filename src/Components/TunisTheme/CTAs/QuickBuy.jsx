import { Input } from 'reactstrap';
import { useContext, useState } from 'react';
import I18NextContext from '@/Helper/I18NextContext';
import { useTranslation } from '@/app/i18n/client';
import { QuickBuyAPI } from '@/Utils/AxiosUtils/API';
import useCreate from '@/Utils/Hooks/useCreate';
import { CheckIcon } from 'lucide-react';

const QuickBuy = ({ dataAPI }) => {
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, 'common');
  const [isSuccess, setSuccess] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const { mutate, isLoading } = useCreate(QuickBuyAPI, false, false, 'No');

  const handleSubmit = () => {
    if (!name || !phone) {
      setError('Both fields must be filled');
      return;
    }

    // Reset error message if inputs are valid
    setError('');

    mutate(
      { name, phone, status: 1 },
      { onSuccess: () => setSuccess(true) }
    );
  };

  return (
    <div class="relative container mx-auto mb-16">
      <div class="mx-auto px-8 md:px-16 py-12 sm:py-20 bg-[#E50914] rounded-md">
        <div class="flex flex-wrap -mx-4 align-items-center">
          <div class="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div class="max-w-lg mx-auto">
              <h4 class="lg:text-6xl text-4xl text-white font-bold">Laissez-nous votre numéro !</h4>
            </div>
          </div>
          <div class="w-full lg:w-1/2 px-4">
            <div class="lg:ml-auto">
              <p class="text-lg font-semibold text-white mb-10">Vous hésitez ou avez des questions ? Entrez votre numéro, et un de nos agents vous rappellera rapidement !</p>
              {!isSuccess && (
                <div class="sm:flex mb-2 gap-2 items-baseline">
                  <Input
                    className="w-full mb-2 sm:mb-0 py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 rounded-lg"
                    type="text"
                    name="name"
                    placeholder="Nom et Prénom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    className="w-full mb-2 sm:mb-0 py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 rounded-lg"
                    type="number"
                    name="phone"
                    placeholder="Numero de Téléphone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <button class="relative group inline-block flex-shrink-0 w-full sm:w-auto py-3 px-5 text-sm font-semibold text-white hover:text-black bg-black rounded-md transition duration-300 overflow-hidden" type="submit"
                    onClick={handleSubmit}>
                    <div class="absolute top-0 right-full w-full h-full bg-gray-400 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                    <div class="relative flex items-center justify-center">
                      <span class="mr-4">Appelez-Moi</span>
                      <svg width="8" height="11" viewbox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.82994 5.04001L2.58994 0.80001C2.49698 0.706281 2.38638 0.631887 2.26452 0.581118C2.14266 0.530349 2.01195 0.504211 1.87994 0.504211C1.74793 0.504211 1.61723 0.530349 1.49537 0.581118C1.37351 0.631887 1.26291 0.706281 1.16994 0.80001C0.983692 0.987372 0.87915 1.24082 0.87915 1.50501C0.87915 1.7692 0.983692 2.02265 1.16994 2.21001L4.70994 5.75001L1.16994 9.29001C0.983692 9.47737 0.87915 9.73082 0.87915 9.99501C0.87915 10.2592 0.983692 10.5126 1.16994 10.7C1.26338 10.7927 1.3742 10.866 1.49604 10.9158C1.61787 10.9655 1.74834 10.9908 1.87994 10.99C2.01155 10.9908 2.14201 10.9655 2.26385 10.9158C2.38569 10.866 2.4965 10.7927 2.58994 10.7L6.82994 6.46001C6.92367 6.36705 6.99806 6.25645 7.04883 6.13459C7.0996 6.01273 7.12574 5.88202 7.12574 5.75001C7.12574 5.618 7.0996 5.48729 7.04883 5.36543C6.99806 5.24357 6.92367 5.13297 6.82994 5.04001Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </button>
                </div>
              )}

              {error && <p className="text-red-500 text-sm">{error}</p>}

              {!isLoading && isSuccess && (
                <div className="sm:flex mb-2 flex items-center gap-2 bg-green-100 py-4 px-4 rounded-md">
                  <CheckIcon className="w-5 h-5 text-green-500 bg-white rounded-full" />
                  <p className="text-lg font-semibold text-black m-auto">
                    Nous avons reçu votre numéro, notre agent vous appellera bientôt.
                  </p>
                </div>
              )}
              <span className="block text-xs font-semibold text-gray-50">
                * Vos données personnelles sont protégées.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickBuy;
