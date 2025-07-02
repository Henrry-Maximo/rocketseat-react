// informações somente disponíveis de forma aberta
// import teste from './assets/teste.png'

import Text from "./components/text";
// primeira letra de um componente deve ser em maiuscúla
import TrashIcon from "./assets/icons/trash.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import PencilIcon from "./assets/icons/pencil.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import XIcon from "./assets/icons/wrong.svg?react";

import Icon from "./components/icon";
import Badge from "./components/badge";

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
        <Icon svg={TrashIcon} className="fill-green-base" />
        <Icon svg={PlusIcon} className="fill-green-base" />
        <Icon svg={PencilIcon} className="fill-green-base" />
        <Icon svg={SpinnerIcon} animate className="fill-green-base" />
        <Icon svg={XIcon} className="fill-green-base" />
        
        {/* <img src={TrashIcon} className="fill-pink-base" /> */}
      </div>

      <div>
        <Badge variant="secondary">5</Badge>
        <Badge variant="primary">2 de 5</Badge>
      </div>
    </div>
  );
}
