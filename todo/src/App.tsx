// informações somente disponíveis de forma aberta
// import teste from './assets/teste.png'

import Text from "./components/text";
// primeira letra de um componente deve ser em maiuscúla
import TrashIcon from "./assets/icons/trash.svg?react";

export default function App() {
  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-2">
        <Text variant="body-md-bold" className="text-pink-base">
          Olá
        </Text>

        <Text className="text-green-base">Olá mundo!</Text>

        <Text variant="body-md-bold">Olá mundo!</Text>

        <Text>Levar o dog para passear</Text>
      </div>

      <div className="flex gap-1">
        <TrashIcon className="fill-green-base" />
        {/* <img src={TrashIcon} className="fill-pink-base" /> */}
      </div>
    </div>
  );
}
